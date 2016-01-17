function init( cvs ) {
	var ctx = cvs.getContext("2d");
	var a = new Image();
	a.src = "waku.png";
	a.addEventListener( "load", function() {
		for( var i = 0; i < 11; i++ ) {
			for( var j = 0; j < 11; j++ ) {
				ctx.drawImage(a, 40*i, 40*j );
			}
		}
	} );
}

function seti() {
	var borderWidth = 0;
	var size = 440;
	var v = 4; // borderの一本が増える速さ
	var elm = document.getElementById("seti-cover");
	var timer = setInterval( function() {
		borderWidth += v;
		size -= v * 2;
		if( size <= 0 ) {
			clearInterval( timer );
		}
		elm.style.width = size + "px";
		elm.style.height = size + "px";
		elm.style.borderWidth = borderWidth + "px";
		
	}, 20 );
}
window.addEventListener( "load", function() {
	init( document.getElementById("cssanm-c") );
	init( document.getElementById("seti-c") );
	document.getElementById("cssanm-cover").classList.add( "close" );
	setTimeout( seti, 1000 );
});
