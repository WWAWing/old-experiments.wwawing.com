/**
 * @Title       Y1302 WWAAnalyse
 * @Author      @rmn_e
 * @Description T1301の続きで, WWAのマップデータ解析を行います.
 *
 * 参考URI
 * http://paulownia.hatenablog.com/entry/20110621/1308653227
 * http://efcl.info/adiary/Javascript/treat-binary
 * https://developer.mozilla.org/ja/docs/JavaScript/Typed_arrays/Uint8Array
 * */

var g_iMapPartsMax, g_iObjectPartsMax;
var g_bOldMap;

var px, py;
var gameoverXp, gameoverYp;
var statusEnergyMax;
var statusEnergy;
var statusStrength;
var statusDefence;
var statusGold;
var itemBox = new Array( 12 );
var g_iMapWidth;
var g_iMesNumberMax;
var g_iPointer;
var map, mapObject;
var QSaveMap, QSaveObject;
var gDataBroken = false;
var mapAttribute;
var objectAttribute;

var worldName;
var worldPassword;
var worldPassNumber;
var mojicgName;
var mapcgName;
var g_szMessageSystem = new Array( 20 );
var strMessage;

var MAP_ATR_MAX;
var OBJECT_ATR_MAX;

var unsignedByte = function( b ){
  b = b % 0x100;
  return b < 0 ? b + 0x100 : b;
}

var signedByte = function( b ){
  b = b % 0x100;
  return b >= 0x80 ? b - 0x100 : b;
}

var dump = function( dest, arr ){
  dest.textContent = "";
  for( var j = 0; j < 1024; j++ ){
    if( arr[ j ] <= 0xf ){ dest.textContent += "0"; }
    dest.textContent += arr[ j ].toString(16) + " ";
    if( j % 16 == 15 ){
      dest.textContent += "\n";
    }
  }
}

var dump2 = function( dest, arr ){
  dest.textContent = "";
  for( var j = arr.length - 1024; j < arr.length; j++ ){
    if( arr[ j ] <= 0xf ){ dest.textContent += "0"; }
    dest.textContent += arr[ j ].toString(16) + " ";
    if( j % 16 == 15 ){
      dest.textContent += "\n";
    }
  }
}

var loadMapString = function( arr ){
  var str = "";
  for( var i = 0; i < 1000; i++ ){
    if(
       arr[ g_iPointer + i * 2     ] == 0 &&
       arr[ g_iPointer + i * 2 + 1 ] == 0
    ){ break; }
    str += String.fromCharCode(
      ( arr[ g_iPointer + i * 2 + 1 ] << 8 ) +
      ( arr[ g_iPointer + i * 2     ]      )
    );
  }
  g_iPointer += i * 2 + 2;
  return str;
}

var loadMapData = function( g, fileName, mode ){
  var data;
  if( mode ){
    var xhr = new XMLHttpRequest();
    xhr.open( "GET", fileName, true );
    // このMIMEタイプのセットで、制御文字を制御文字として読まないようにする.
    xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
    xhr.onreadystatechange = function(){
      if( xhr.readyState == 4 ){
        if( xhr.status == 200 ){
          data = xhr.responseText;
          proc( g, data, mode );
        }
      }
    };
    xhr.send( null ); // 忘れないように.
  }else{
    // TODO: data実装
//    proc( g, data, mode );
  }
};

var proc = function( g, data, mode ){
  var t_start = new Date();

  // Uint8Array : Unsigned Integer 8bit Array
  var arr = new Uint8Array( data.length );

  // ぶっちゃけ, 重いです. あまりに重いようならWebWorkerを使ったほうがいいかも.
  for ( var i = 0; i < data.length; i++ ){
    // 受信データはUTF-8なので、上位ビットに余計なのがある
    // 従って, 0xFFと論理積を取り、上位ビットを0にする.
    // (まぁ, 代入先はUint8Arrayだからこの操作はいらないかもね.)
    arr[ i ] = data.charCodeAt( i ) & 0xff ;
  }

  var dest = document.getElementById( "dump" );
  dump( dest, arr );
  
  // マップデータ抽出
  // マップデータはランレングス圧縮されているので, 展開する.
  console.log( "EXTRACT START" );
  var ii = 0, jj = 0;
  var extractEnd;
  var arr2 = new Uint8Array( arr.length );
  while( arr[ ii ] || arr[ ii + 1 ] || arr[ ii + 2 ] ){
    arr2[ jj++ ] = arr[ ii ];
    if( arr[ ii ] == arr[ ii + 1 ] ){
      var n = arr[ ii + 2 ];
      for( var m = 0; m < n; m++ ){
        arr2[ jj++ ] = arr[ ii ];
      }
      ii += 2;
    }
    if( jj + 255 >= arr2.length ){
          var temp = new Uint8Array( jj + 65000 );
          for( var kk = 0; kk < jj; kk++ ){
            temp[ kk ] = arr2[ kk ];
          }
          arr2 = temp;
        }
    ii++;
  }
  console.log( "EXTRACT DATA =" + jj + " " + ii ); // ここまでOK
  if ( arr2[2] >= 0x1d ){
    var i1 = 0;
    for (var k = 2; k < jj; k++){
      i1 += signedByte( arr2[k] ) * (k % 8 + 1);
    }
    i1 = i1 % 0x10000 & 0xffff;
    var i2 = arr2[0] + arr2[1] * 0x100;
    if (i2 != i1){
      console.log( "DATA WAS BROKEN:" + i1 + " " + i2 );
      gDataBroken = true;
    }
  }
  console.log( "EXTRACT END length=" + jj );
  extractEnd = ii + 3;

  dump( dest, arr2 );
  if( gDataBroken ){
    alert( "マップデータが壊れています!!!" );
    return;
  }

  // arr[ 2 ]はバージョン番号かしら?
  if( arr2[ 2 ]  <=  0x1d ){ // arr[ 2 ] <= 29
    var DATA_MAP_COUNT = 3;
    var DATA_OBJECT_COUNT = 4;
    var DATA_CHARA_X = 5;
    var DATA_CHARA_Y = 6;
    var DATA_OVER_X = 18;
    var DATA_OVER_Y = 19;
    var DATA_ITEM = 20;
    gameoverXp = arr2[ DATA_OVER_X ];
    gameoverYp = arr2[ DATA_OVER_Y ];
    px = arr2[ DATA_CHARA_X ]; // i3
    py = arr2[ DATA_CHARA_Y ]; // i4
    g_iMapPartsMax = arr2[ DATA_MAP_COUNT ];
    g_iObjectPartsMax = arr2[ DATA_OBJECT_COUNT ];
    g_bOldMap = 1; // 旧バージョン
  }else{ // 新バージョン?
    var DATA_MAP_COUNT = 34;
    var DATA_OBJECT_COUNT = 36;
    var DATA_CHARA_X = 38;
    var DATA_CHARA_Y = 40;
    var DATA_OVER_X = 42;
    var DATA_OVER_Y = 44;
    var DATA_ITEM = 60;
    // このバージョンでは, パラメータ2バイトになっている!!
    gameoverXp =
      arr2[ DATA_OVER_X ]  + arr2[ DATA_OVER_X + 1 ] * 0x100;
    gameoverYp =
      arr2[ DATA_OVER_Y ] + arr2[ DATA_OVER_Y + 1 ] * 0x100;
    px = arr2[ DATA_CHARA_X ] + arr2[ DATA_CHARA_X + 1 ] * 0x100;
    py = arr2[ DATA_CHARA_Y ] + arr2[ DATA_CHARA_Y + 1 ] * 0x100;
    g_iMapPartsMax =
      arr2[ DATA_MAP_COUNT ] + arr2[ DATA_MAP_COUNT + 1 ] * 0x100;
    g_iObjectPartsMax =
      arr2[ DATA_OBJECT_COUNT ] + arr2[ DATA_OBJECT_COUNT + 1 ] * 0x100;
    
  }
  statusEnergyMax = arr2[32] + arr2[33] * 0x100;
  statusEnergy = arr2[10] + arr2[11] * 0x100;
  statusStrength = arr2[12] + arr2[13] *0x100 
  statusDefence = arr2[14] + arr2[15] * 0x100;
  statusGold = arr2[16] + arr2[17] * 0x100;
  for (var i = 0; i < 12; i++){
    itemBox[i] = arr2[DATA_ITEM + i];
  }
  g_iMapWidth = arr2[46] + arr2[47] * 0x100;
  g_iMesNumberMax = arr2[48] + arr2[49] * 0x100;

  if( arr2[ 2 ] < 0x1c ){ g_iMapWidth = 71; }
  else if( arr2[ 2 ] <= 0x1d ){ g_iMapWidth = 101; }

  // JumpPoint( px, py ); // 未実装

  g_iPointer = arr2[2] >= 0x1d ? 90 : 100;
  if( mode ){
    map = new Array( g_iMapWidth );
    mapObject = new Array( g_iMapWidth );
    QSaveMap = new Array( g_iMapWidth );
    QSaveMapObject = new Array( g_iMapWidth );
    for( var i = 0; i < g_iMapWidth; i++ ){
      map[ i ] = new Array( g_iMapWidth );
      mapObject[ i ] = new Array( g_iMapWidth );
      QSaveMap[ i ] = new Array( g_iMapWidth );
      QSaveMapObject[ i ] = new Array( g_iMapWidth );
    }
  }
  for( var k = 0; k < g_iMapWidth; k++ ){
    for( var m = 0; m < g_iMapWidth; m++ ){
      if( arr2[ 2 ] <= 0x1d ){
        map[ k ][ m ] = arr2[ g_iPointer++ ];
      }else{
        map[ k ][ m ] = arr2[ g_iPointer ] + arr2[ g_iPointer + 1 ] * 0x100;
        g_iPointer += 2;
      }
      if( map[ k ][ m ] >= g_iMapPartsMax ){
        map[ k ][ m ] = 0;
      }
    }
  }
  for( var k = 0; k < g_iMapWidth; k++ ){
    for( var m = 0; m < g_iMapWidth; m++ ){
      if( arr2[ 2 ] <= 0x1d ){
        mapObject[ k ][ m ] = arr2[ g_iPointer++ ];
      }else{
        mapObject[ k ][ m ] = arr2[ g_iPointer ] + arr2[ g_iPointer + 1 ] * 0x100;
        g_iPointer += 2;
      }
      if( mapObject[ k ][ m ] >= g_iObjectPartsMax ){
        mapObject[ k ][ m ] = 0;
      }
    }
  }
  
  if( arr2[ 2 ] <= 0x1d ){
    MAP_ATR_MAX = 40;
    OBJECT_ATR_MAX = 40;
  }else{
    MAP_ATR_MAX = 60;
    OBJECT_ATR_MAX = 60;
  }

  if( mode ){
    mapAttribute = new Array( g_iMapPartsMax );
    objectAttribute = new Array( g_iObjectPartsMax );
  }
  for( var i = 0; i < g_iMapPartsMax ; i++ ){
    mapAttribute[ i ] = new Array( MAP_ATR_MAX );
    for( var j = 0; j < MAP_ATR_MAX; j++ ){
      if( j == 1 || j == 2 ){
        if( mode ){ mapAttribute[ i ][ j ] = 0; }
        g_iPointer += 2;
      }else{
        mapAttribute[ i ][ j ] = arr2[ g_iPointer ] + arr2[ g_iPointer + 1 ] * 0x100;
        g_iPointer += 2;
      }
    }
  }
  for( var i = 0; i < g_iObjectPartsMax ; i++ ){
    objectAttribute[ i ] = new Array( OBJECT_ATR_MAX );
    for( var j = 0; j < OBJECT_ATR_MAX; j++ ){
      if( j == 1 || j == 2 ){
        if( mode ){ objectAttribute[ i ][ j ] = 0; }
        g_iPointer += 2;
      }else{
        objectAttribute[ i ][ j ] = arr2[ g_iPointer ] + arr2[ g_iPointer + 1 ] * 0x100;
        g_iPointer += 2;
      }
    }
  }
  if( arr2[ 2 ] <= 0x1d ){
    // 旧バージョンは、指定位置パーツを出現データの格納箇所が違うので
    // データを加工する必要がある.
    // とりあえず、今回はWWA 3.02bが動けばいい + 超面倒なので省略
    alert( "ご利用のWWAは旧バージョンです. 対応していません." );
  }

  /*
   * ランダム選択 未実装
  for( var y = 0; y < g_iMapWidth; y++ ){
    for( var x = 0; x < g_iMapWidth; x++ ){
      RandomCharacter( y, x );
    }
  }
  */
  g_iPointer = extractEnd;
  // 解凍前のデータに戻す
  for ( var i = 0; i < data.length; i++ ){
    arr2[ i ] = arr[ i ];
  }
  if( arr2[ 2 ] >= 0x1e ){
    worldPassWord = loadMapString( arr2 );
  }
  if( arr2[ 2 ] <= 0x1d ){
    g_iMesNumberMax = 400;
  }
 
  strMessage = new Array( g_iMesNumberMax );
  for( i = 0; i < g_iMesNumberMax; i++ ){
    strMessage[ i ] = loadMapString( arr2 );
  }
  worldName = loadMapString( arr2 );
  if( arr2[ 2 ] <= 0x1d ){
    worldPassword = loadMapString( arr2 );
  }else{
    loadMapString( arr2 );
  }
  if( arr2[ 2 ] >= 0x1d ){
    worldPassNumber = ( ( parseInt( worldPassword ) / 10 - 1197 ) / 17 - 2357 );
  }else{
    worldPassNumber = parseInt( worldPassword );
  }
  mojicgName = loadMapString( arr2 );
  mapcgName = loadMapString( arr2 );
   
  if( arr2[ 2 ] >= 0x1e ){
    // TODO: 一部、システムメッセージの読み込みに失敗するっぽい
    // マップデータ見る限りでは仕様っぽい.
    for( var i = 0; i < 20; i++ ){
      g_szMessageSystem[ i ] = loadMapString( arr2 );
    }
  }else{
    for( var i = 0; i < 20; i++ ){
      g_szMessageSystem[ i ] = "";
    }
  }
  // arrangeItem( 0 ); // 未実装
  
  var t_end = new Date();
  
  alert( "読み込みに" + ( t_end - t_start ) + " ms かかりました.\nおっそーい!!!"  );

  var f_px = document.getElementById( "px" );
  var f_py = document.getElementById( "py" );
  var f_gox =document.getElementById("gox");
  var f_goy =document.getElementById("goy");
  var f_mapx = document.getElementById( "mapPartsMax" );
  var f_objx = document.getElementById( "objPartsMax" );
  var f_emx = document.getElementById( "emx" );
  var f_eng = document.getElementById( "eng" );
  var f_atk = document.getElementById( "atk" );
  var f_def = document.getElementById( "def" );
  var f_gld = document.getElementById( "gld" );
  var f_mw = document.getElementById( "mapWidth" );
  var f_mesx = document.getElementById( "mesMax" );

  var f_worldName = document.getElementById( "wName" );
  var f_mapcg = document.getElementById( "cgName" );

  f_px.setAttribute( "value", px);
  f_py.setAttribute( "value", py );
  f_gox.setAttribute( "value", gameoverXp );
  f_goy.setAttribute( "value", gameoverYp );
  f_mapx.setAttribute( "value", g_iMapPartsMax );
  f_objx.setAttribute( "value", g_iObjectPartsMax );
  f_emx.setAttribute( "value", statusEnergyMax );
  f_eng.setAttribute( "value", statusEnergy );
  f_atk.setAttribute( "value", statusStrength );
  f_def.setAttribute( "value", statusDefence );
  f_gld.setAttribute( "value", statusGold );
  f_mw.setAttribute( "value", g_iMapWidth );
  f_mesx.setAttribute( "value", g_iMesNumberMax );
  f_worldName.setAttribute( "value", worldName );
  f_mapcg.setAttribute( "value", mapcgName );
}
window.onload = function(){
  loadMapData( null, "./island02.dat", true);
}
