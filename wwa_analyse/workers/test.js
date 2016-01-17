/**
 * @Title       Y1303 WWAAnalyse
 * @Author      @rmn_e
 * @Description Y1301の続きで, data.WWAのマップデータ解析を行います.
 *
 * 参考URI
 * http://paulownia.hatenablog.com/entry/20110621/1308653227
 * http://efcl.info/adiary/Javascript/treat-binary
 * https://developer.mozilla.org/ja/docs/JavaScript/Typed_arrays/Uint8Array
 * */

var t_start;
var t_end;

var main = function(){
  t_start = new Date();
  var worker = new Worker( "./load.js" );
  worker.postMessage( {"g": null, "fileName": "./island02.dat", "mode": true });
  worker.onmessage = function( e ){
    disp( e.data );
  }
}

var disp = function( data ){
  t_end = new Date();
  
  if( data.errorID != 0 ){
    alert( data.errorMessage );
    return;
  }

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

  f_px.setAttribute( "value", data.px);
  f_py.setAttribute( "value", data.py );
  f_gox.setAttribute( "value", data.gameoverXp );
  f_goy.setAttribute( "value", data.gameoverYp );
  f_mapx.setAttribute( "value", data.g_iMapPartsMax );
  f_objx.setAttribute( "value", data.g_iObjectPartsMax );
  f_emx.setAttribute( "value", data.statusEnergyMax );
  f_eng.setAttribute( "value", data.statusEnergy );
  f_atk.setAttribute( "value", data.statusStrength );
  f_def.setAttribute( "value", data.statusDefence );
  f_gld.setAttribute( "value", data.statusGold );
  f_mw.setAttribute( "value", data.g_iMapWidth );
  f_mesx.setAttribute( "value", data.g_iMesNumberMax );
  f_worldName.setAttribute( "value", data.worldName );
  f_mapcg.setAttribute( "value", data.mapcgName );
}
window.onload = function(){
  main();
}
