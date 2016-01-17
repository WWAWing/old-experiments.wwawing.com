/**
 * @Title       Y1301 BinaryXHRTest
 * @Author      @rmn_e
 * @Description JavaScriptでバイナリファイルをXHRで受け取るテストです。
 *              サンプルとして、24Lifeのマップデータを読み込みます。
 * @Remark      XHRとUint8Arrayは、本来ブラウザ側で実装されているかどうか
 *              確認する必要がありますが、面倒なのでやってません。
 *              IE8以下使っている方、ごめんなさい。
 * 参考URI
 * http://paulownia.hatenablog.com/entry/20110621/1308653227
 * http://efcl.info/adiary/Javascript/treat-binary
 * https://developer.mozilla.org/ja/docs/JavaScript/Typed_arrays/Uint8Array
 * */

var main = function(){
  var data;
  var xhr = new XMLHttpRequest();
  xhr.open( "GET", "./island02.dat", true );
  // このMIMEタイプのセットで、制御文字を制御文字として読まないようにする.
  xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
  xhr.onreadystatechange = function(){
    if( xhr.readyState == 4 ){
      if( xhr.status == 200 ){
        data = xhr.responseText;
        proc( data );
      }
    }
  };
  xhr.send( null ); // 忘れないように.
};

var proc = function( data ){
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
  dest.textContent = "";
  for( var j = 0; j < 1024; j++ ){
    if( arr[ j ] < 0xf ){ dest.textContent += "0"; }
    dest.textContent += arr[ j ].toString(16) + " ";
    if( j % 16 == 15 ){
      dest.textContent += "\n";
    }
  }
}
window.onload = function(){
  main();
}
