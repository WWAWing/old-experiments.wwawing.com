class WWA{
// 設定
USE_DEBUG_CANVAS :bool = false;

test :number = 0;

    /* パーツの属性を示す配列添字を指す定数 */
ATR_0        :number =  0;
ATR_CROP1    :number =  1;  // パーツ画像位置1
ATR_CROP2    :number =  2;  // パーツ画像位置2
ATR_TYPE     :number =  3;  // パーツの種類( 通常物体, メッセージ, 道, etc.. )
ATR_MODE     :number =  4;  // パーツのモード( 物体通行属性, 使用型アイテム, 扉属性, etc... )
ATR_STRING   :number =  5;  // 対応するメッセージ番号
ATR_X        :number =  6;
ATR_Y        :number =  7;
ATR_X2       :number =  8;
ATR_Y2       :number =  9;
ATR_ENERGY   :number = 10;  // 生命力
ATR_STRENGTH :number = 11;  // 攻撃力
ATR_DEFENCE  :number = 12;  // 防御力
ATR_GOLD     :number = 13;  // 所持金
ATR_ITEM     :number = 14;  // 売り買いするアイテム番号など
ATR_NUMBER   :number = 15;  // 多用途( 待ち時間, アイテムボックス位置, 扉属性, etc... )
ATR_JUMP_X   :number = 16;  // ジャンプゲートのジャンプ先X座標
ATR_JUMP_Y   :number = 17;  // ジャンプゲートのジャンプ先Y座標
ATR_SOUND    :number = 19;  // サウンド番号
ATR_MOVE     :number = 16;  // 移動属性( 追尾, うろうろする, etc... )

  /* 背景の種別を示す定数 */
MAP_STREET    :number = 0;  // 道
MAP_WALL      :number = 1;  // 壁
MAP_LOCALGATE :number = 2;  // ジャンプゲート
MAP_URLGATE   :number = 4;  // URLゲート

   /* 物体の種別を指す定数 */
OBJECT_NORMAL     :number = 0; // 通常物体
OBJECT_MESSAGE    :number = 1; // メッセージ
OBJECT_URLGATE    :number = 2; // URLゲート
OBJECT_STATUS     :number = 3; // ステータス変化
OBJECT_ITEM       :number = 4; // アイテム
OBJECT_DOOR       :number = 5; // 扉
OBJECT_MONSTER    :number = 6; // モンスター
OBJECT_SCORE     :number = 11; // スコア表示
OBJECT_SELL      :number = 14; // 物を売る
OBJECT_BUY       :number = 15; // 物を買う
OBJECT_RANDOM    :number = 16; // ランダム選択
OBJECT_SELECT    :number = 17; // 二者択一 
OBJECT_LOCALGATE :number = 18; // ジャンプゲート

      /* */
CONFIG_QLOAD_X :number = 450;
CONFIG_QLOAD_Y :number = 324;
CONFIG_QSAVE_X :number = 450;
CONFIG_QSAVE_Y :number = 359;
CONFIG_RESTART_X :number = 449;
CONFIG_RESTART_Y :number = 394;

      /* 二者択一の種別 */
      // this.yesnoNumberの定数
      // yesnoFlagがtrueの時のみ有効
YESNO_NONE      :number = 0;
YESNO_YES       :number = 1;
YESNO_NO        :number = 2;
YESNO_WWAH      :number = 3;
YESNO_URLGATE   :number = 4;
YESNO_RESTART   :number = 5;
YESNO_SELL      :number = 6;
YESNO_BUY       :number = 7;
YESNO_SOUND     :number = 8;
YESNO_USEITEM   :number = 9;
YESNO_QSAVE    :number = 10;
YESNO_QLOAD    :number = 11;
YESNO_SELECT   :number = 12;
YESNO_TEXTSAVE :number = 13;
YESNO_TEXTLOAD :number = 14;


CROP_YES  :number = 13;
CROP_NO :number = 14;                
CROP_YES2 :number = 15;                
CROP_NO2  :number = 16;                
CROP_ENERGY :number = 23;                
CROP_STRENGTH :number = 24;                
CROP_DEFENCE  :number = 25;                
CROP_GOLD :number = 26;                
CROP_BOM  :number = 33;                
FRAME_ENERGY_X  :number = 446;                 
FRAME_ENERGY_Y  :number = 0;                 
FRAME_STRENGTH_X  :number = 446;                 
FRAME_STRENGTH_Y  :number = 35;                
FRAME_DEFENCE_X :number = 446;                 
FRAME_DEFENCE_Y :number = 70;                
FRAME_GOLD_X  :number = 446;                 
FRAME_GOLD_Y  :number = 105;                 
DATA_CHECK  :number = 0;                 
DATA_MAP_VERSION  :number = 2;                 
DATA_STATUS_ENERGY  :number = 10;                
DATA_STATUS_STRENGTH  :number = 12;                
DATA_STATUS_DEFENCE :number = 14;                
DATA_STATUS_GOLD  :number = 16;                
DATA_STATUS_ENERGYMAX :number = 32;                
DATA_MAP_COUNT  :number ;                  
DATA_OBJECT_COUNT :number ;                  
DATA_CHARA_X  :number ;                  
DATA_CHARA_Y  :number ;                  
DATA_OVER_X :number ;                  
DATA_OVER_Y :number ;                  
DATA_ITEM  :number ;
EX_DATA_CHARA_X :number = 38;                
EX_DATA_CHARA_Y :number = 40;                
EX_DATA_OVER_X  :number = 42;                
EX_DATA_OVER_Y  :number = 44;                
DATA_IMG_CHARA_CROP :number = 46;                
DATA_IMG_YESNO_CROP :number = 48;                
EX_DATA_ITEM  :number = 60;                
DATA_MAP_SIZE :number = 46;                
DATA_MES_NUMBER :number = 48;                
DATA_CHECK_PARTS  :number = 50;                
DATA_SAVE_STOP  :number = 52;                
EX_DATA_STATUS_ENERGYMAX  :number = 54;                
DATA_FLAG_DEFAULT :number = 56;                
DATA_FLAG_OLDMAP  :number = 58;                
FREAD_BLOCK :number = 10000;                 
MEM_BLOCK :number = 65000;                 
MAP_ATR_MAX  :number ;                  
OBJECT_ATR_MAX :number ;                  
SOUND_MAX :number = 100;                 
charaX  :number ;                  
charaY  :number ;                  
playerX :number ;                  
playerY :number ;                  
moveDirect  :number = 2; // :char = '\002';                
movePlus  :number = 1;                 
strMessage  :string[] ;                  
g_szMessageSystem :string[] = new Array( 20 ); // = new String[20];              
strNumber :number ;                  
mapcgName :string ;                  
mojicgName  :string ;                  
worldPassword :string ;                  
worldPassNumber :number ;                  
yesnoNumber  :number ;
yesnoJudge  :number ;                  
yesnoX  :number ;                  
yesnoY :number  ;                  
yesnoFlag:bool ;                  
messageFlag :bool  ;                  
loadingFlag :bool  = false;                 
configFlag:bool  ;                  
scoreFlag:bool ;                  
urlJumpFlag :bool  ;                  
g_bUseUrlJump:bool ;                  
quickSaveFlag:bool = false; 

displayMonsterFlag  :bool  = false;                 
gFileNotFound :bool  ;                  
gImageNotFound  :bool = false  ;                  
gDataBroken :bool  ;                  
g_bIOError  :bool  = false;                 
g_bAudioError :bool  = false;                 
bDispUseItemMes :bool  = true;                
g_bAttackJudgeMes :bool  = true;                
g_bDisplayCenter  :bool  = false;                 
g_bJREFont  :bool  = false;                 
UpKey :bool  ;                  
DownKey :bool  ;                  
LeftKey :bool  ;                  
RightKey  :bool  ;                  
currentKey:number ;                  
inputKey  :bool  = true;                

TimerCount  :number = 20; //  スレッドを何秒寝かせるか[ms]. "20msの場合," ゲームは50FPSで動作する.         
countAnimation  :number = 0 ;                  
countRepaint  :number ;                  
waitCounterLast :number = 0;                 
g_iRepaintCount :number = 10;                
g_iRepaintRetry :number = 0;                 
imgMap  :HTMLImageElement  ;                  
imgCrop :HTMLImageElement[]  ;                  
cropID  :number ;                  
cropIDchara :number = 4;                 
imgBuff :HTMLCanvasElement;                  
imgBuffMap  :HTMLCanvasElement;                  
imgBuffStatus :HTMLCanvasElement;                  
imgBuffCharaX:HTMLCanvasElement;                  
imgBuffCharaY :HTMLCanvasElement;                  
imgBuffBattle :HTMLCanvasElement;                  
imgBuffButton:HTMLCanvasElement;                  
gBuff :CanvasRenderingContext2D;                  
gBuffMap  :CanvasRenderingContext2D;                  
gBuffStatus :CanvasRenderingContext2D;                  
gBuffCharaX :CanvasRenderingContext2D;                  
gBuffCharaY :CanvasRenderingContext2D;                  
gBuffBattle :CanvasRenderingContext2D;                  
gBuffButton :CanvasRenderingContext2D;                  

mapX  :number ;                  
mapY  :number ;                  
mdata :number ;                  
mdataBuff:number  ;                  
XpBuff  :number ;                  
YpBuff  :number ;                  

// 後で書く falseが121個
// mapFlag :bool[][]  = new bool[11][11];               

mapFlagAll  :bool  ;                  
mapFlagErase  :bool  ;                  
flagDisplayStatus :bool  ; 
movingSkip  :number ;                  
repaintSkip :bool  ;                  
itemboxBuff :number = -1;                
g_iUseItem  :number = 0;                 
map :number[][] ;                  
mapObject :number[][] ;                  
objectAttribute :number[][] ;                  
mapAttribute  :number[][] ;                  
mapFrame  :number[][] = [
[ 0,  40 ], [ 40,  40 ], [ 80,  40 ],
[ 0,  80 ], [ 40,  80 ], [ 80,  80 ],
[ 0, 120 ], [ 40, 120 ], [ 80, 120 ],
[ 120, 40 ], [ 160, 40 ], [ 200, 40 ],
[ 240, 40 ], [ 120, 80 ], [ 160, 80 ],
[ 200, 80 ], [ 240, 80 ], [ 120, 120 ],
[ 160, 120 ], [ 200, 120 ], [ 240, 120 ],
[ 280, 40 ], [ 320, 40 ], [ 360, 40 ]
];
itemBox :number[] = [ 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0 ];
statusEnergyMax :number ;                  
statusEnergy  :number ;                  
statusStrength  :number ;                  
statusDefence :number ;                  
statusGold  :number ;                  
itemStrength  :number ;                  
itemDefence :number ;                  
score :number ;                  
monsterEnergy :number ;                  
monsterStrength :number ;                  
monsterDefence  :number ;                  
monsterGold :number ;                  
attackXp  :number ;                  
attackYp  :number ;                  
attackFlag  :bool  ;                  
attackFlagTurn  :bool  ;                  
g_iAttackTurn :number ;                  
gameoverXp  :number ;                  
gameoverYp:number ;                  
g_iImgCharaCrop :number = 2;                 
byteBuff  :Uint8Array;                  
byteBuffPress :Uint8Array = new Uint8Array(65000);               
QSaveParameter  :number[] = new Array(50);               
QSaveMap  :number[][] ;                  
QSaveMapObject  :number[][] ;                  
PressData :number[] ;                  
g_bSaveStop :number = 0;                 
g_bDefault  :number = 0;                 
g_bOldMap :number = 0;                 
worldName :string ;                  
soundFlag :bool  = false;                 
g_iMapWidth :number = 101;                 
g_iCropMax  :number ;                  
g_iMapPartsMax  :number ;                  
g_iObjectPartsMax :number ;                  
g_iMesNumberMax :number ;                  
g_iYesnoY:number  ;                  
g_iPointer  :number ;                  
g_iBlockByteBuff  :number = 1;                 
g_iBlockByteBuffPress :number = 1;                 
g_iFileSize :number = 0;                 
g_iPointerExtract :number ;                  
g_bCompleteExtract  :bool  ;                  
g_iPageNumber :number = 0;                 
g_iLast :number ;                  
g_bFadeBlack  :bool  = false;                 
g_szKeyList :string = "【　ショートカットキーの一覧　】\n\nＦ１：戦闘結果予測の表示\nＦ３：復帰用パスワード入力\nＦ４：復帰用パスワード表示\nＦ５：一時保存データの読み込み\nＦ６：データの一時保存\nＦ７：初めからスタート\nＦ８：ＷＷＡ公式ページにリンク\nＦ１２：このリストの表示\n\nキーボードの「１２３、ＱＷＥ、\nＡＳＤ、ＺＸＣ」は\n右のアイテムボックスに対応。\n\n「リターンキー、Ｙ」はＹＥＳ\n「ＥＳＣキー、Ｎ」はＮＯに対応。";                
oldMapData  :bool  ;                  
oldObjectData :bool  ;                  
oldMapX :bool  ;                  
oldMapY :bool  ;                  
oldString:string  ;                  

g_bMapLoadComplete :bool = false; // rmn. ++;
g_bImageLoadComplete :bool = false;
g_bImageClipComplete :bool = false;

SOUNDLOAD_YET : number = 0;
SOUNDLOAD_LOADING : number = 1;
SOUNDLOAD_COMPLETE : number = 2;
SOUNDLOAD_OFF : number = 3;
g_iSoundLoadState : number;

g_bMapLoadStart :bool = false; // rmn. ++;
g_bImageLoadStart :bool = false;
g_bImageClipStart :bool = false;

g_iCropLoadNum :number = 0;
g_cropTimer: any;
g_bLoadComplete :bool = false;

g_dLoadTime : any;

g_msgWindow: WWAMessageWindow = null;
wwaData : any;


canvas: HTMLCanvasElement = null;
g : CanvasRenderingContext2D = null;
canvasWrapper : HTMLElement;

  constructor( eID : string ){
    this.g_dLoadTime = new Date();
    this.canvas = <HTMLCanvasElement> document.getElementById( eID );
    this.g = this.canvas.getContext( "2d" );

    this.init();
  }

  init(){
    this.soundFlag = false;
    this.attackFlag = false;
    this.scoreFlag = false;
    this.urlJumpFlag = false;
    this.inputKey = true;
    this.yesnoNumber = 0;
    this.yesnoJudge = 0;
//    this.mapFlagErase = false;
    this.messageFlag = false;
    this.configFlag = false;
    this.UpKey = false;
    this.DownKey = false;
    this.LeftKey = false;
    this.RightKey = false;
    this.countRepaint = 0;
    this.movingSkip = 0;
    this.repaintSkip = false;
    this.currentKey = 0;
    this.mapFlagAll = true;
    this.gFileNotFound = false;
    this.gImageNotFound = false;
    this.gDataBroken = false;
    this.PressData = null;
    this.canvasWrapper = document.getElementById( "canvasWrapper" );

    
    // ダブルバッファリング用のバッファ
    var wc : WWACanvas;
    wc = new WWACanvas( this.canvasWrapper, "imgBuff", 440, 440, this.USE_DEBUG_CANVAS );
    this.imgBuff = wc.getElement();
    this.gBuff = wc.getContext();
        
    // マップ用のバッファ
    wc = new WWACanvas( this.canvasWrapper, "imgBuffMap", 40, 40, this.USE_DEBUG_CANVAS );
    this.imgBuffMap = wc.getElement();
    this.gBuffMap = wc.getContext();

    // ステータス画面のバッファ
    wc = new WWACanvas( this.canvasWrapper, "imgBuffStatus", 120, 440, this.USE_DEBUG_CANVAS );
    this.imgBuffStatus = wc.getElement();
    this.gBuffStatus = wc.getContext();

    // ボタン他のバッファ
    wc = new WWACanvas( this.canvasWrapper, "imgBuffButton", 120, 35, this.USE_DEBUG_CANVAS );
    this.imgBuffButton = wc.getElement();
    this.gBuffButton = wc.getContext();
    
    
    // まうす (仮)
    this.canvas.onmousedown = function( e ){
      // if( !wwa ){ return true; }
      // WWA画面外のクリック時はtrueを返したい
      if( wwa.yesnoNumber != wwa.YESNO_NONE ){
        var lp : any = wwa.getLocalPosition( e.clientX, e.clientY );
        if(
          lp.x > wwa.yesnoX && lp.x < wwa.yesnoX + 40 &&
          lp.y > wwa.yesnoY && lp.y < wwa.yesnoY + 40
        ){
          wwa.yesnoJudge = wwa.YESNO_YES;
 //         alert( "YES!!!!!!!!!!!");
        }
        if(
          lp.x > wwa.yesnoX + 40 && lp.x < wwa.yesnoX + 80 &&
          lp.y > wwa.yesnoY      && lp.y < wwa.yesnoY + 40
        ){
          wwa.yesnoJudge = wwa.YESNO_NO;
//          alert( "NO!!!!!!!!!!!");
        }
//        alert( lp.y+ " " + lp.y );
      }
      return false;
    };
    
    // きーぼーど(仮)
    window.onkeydown = function( e ){
      if( wwa.yesnoNumber != wwa.YESNO_NONE ){
        if( e.keyCode == 89 /*Y*/ || e.keyCode == 13 /* Enter */ ){
          wwa.yesnoJudge = wwa.YESNO_YES;
          return false;
        }
        if( e.keyCode == 78 /*N*/ || e.keyCode == 27 /* Esc */ ){
          wwa.yesnoJudge = wwa.YESNO_NO;
          return false;
        }
      }else{
        // KARI // KARI // KARI // KARI
        if( e.keyCode == 37 && wwa.wwaData.playerX > 0 /*L*/ ){
          wwa.wwaData.playerX--;
          wwa.wwaData.charaX  = wwa.wwaData.playerX % 10 * 5;
          wwa.wwaData.mapX = Math.floor( wwa.wwaData.playerX / 10 );
          return false;
        }
        if( e.keyCode == 38 && wwa.wwaData.playerY > 0 /*U*/ ){
          wwa.wwaData.playerY--;
          wwa.wwaData.charaY  = wwa.wwaData.playerY % 10 * 5;
          wwa.wwaData.mapY = Math.floor( wwa.wwaData.playerY / 10 );
          return false;
        }
        if( e.keyCode == 39 && wwa.wwaData.playerX < wwa.wwaData.g_iMapWidth - 2 /*R*/ ){
          wwa.wwaData.playerX++;
          wwa.wwaData.charaX  = wwa.wwaData.playerX % 10 * 5;
          wwa.wwaData.mapX = Math.floor( wwa.wwaData.playerX / 10 );
          return false;
        }
        if( e.keyCode == 40 && wwa.wwaData.playerY < wwa.wwaData.g_iMapWidth - 2 /*D*/ ){
          wwa.wwaData.playerY++;
          wwa.wwaData.charaY = wwa.wwaData.playerY % 10 * 5;
          wwa.wwaData.mapY = Math.floor( wwa.wwaData.playerY / 10 );
          return false;
        }
        // KARI // KARI // KARI // KARI
      }
      return true;
    };
    console.log( "<init>" );
    this.start();
  }

  start(){
    console.log( "<start>" );
    this.run();
  }

  stop(){
    console.log( "<stop>" );
  }

  destroy(){
    // GC 未実装
    console.log( "<destroy>" );
  }

  run(){
    var t : number;
    this.update();
    if( this.urlJumpFlag ){
      t = 500;
    }
    if( this.yesnoNumber == this.YESNO_SOUND || !this.loadingFlag  ){
      t = 200;
    }else{
      t = this.TimerCount;
    }
    setTimeout( wran, t );
  }

  update(){
    if( this.g_msgWindow != null ){
      this.g_msgWindow.update();
    }
//    if( !this.repaintSkip ){
      this.paint( this.g );
//    }
  }

  paint( g : CanvasRenderingContext2D ){
    g.clearRect( 0, 0, 5, 440 );

    // if( ErrorCheck( g ) ){ return; }

    if( !this.loadingFlag ){
      if( !this.g_bMapLoadStart ){
        this.g_bMapLoadStart = true;
        this.LoadingMessage( g, 0 );
        var worker : Worker = new Worker( "./load.js?" + new Date().getTime() );
        worker.postMessage( {"g": null, "fileName": "./island02.dat", "mode": true });
        worker.onmessage = function( e ){
          wwa.wwaData = e.data;
          wwa.g_bMapLoadComplete = true;
        }
      }
      if( this.g_bMapLoadComplete  ){
        
        if( this.wwaData.errorID != 0 ){
          console.log( this.wwaData.errorMessage );
          return;
        }
        this.LoadingMessage( g, 1 );

        this.graficLoading( g );

        if( this.gImageNotFound ){ return; }

        
        if( this.g_bImageClipComplete ){
          // メッセージウィンドウ( experimental )
          this.g_msgWindow = new WWAMessageWindow( 50, 180, 340, 75, "", false, true, this.canvasWrapper );

          this.yesnoNumber = this.YESNO_SOUND;
          this.g_iSoundLoadState = this.SOUNDLOAD_YET
          this.yesnoFlag = true;
          
          this.loadingFlag = true;

        }
      }
      
    } // loadingFlag 閉じ
    if( !this.g_bLoadComplete ){ return; }
    // パスワードセーブデータ関連は実装予定無し

    // TODO F1先頭結果予測 未実装
    
    //  ダブルバッファリングのバッファから本画面へ描画
//    if( !this.inputKey ){
      this.waitCounterLast = 200;
      var img : HTMLImageElement;

      img = new Image();
      img.src = this.imgBuff.toDataURL();
      g.drawImage( img, 0, 0 );
      
      img = new Image();
      img.src = this.imgBuffStatus.toDataURL();
      g.drawImage( img, 440, 0 );

//    }

    // 二者択一ウィンドウ描画
    // 効果音データのロード判定はここ
    if( !this.yesnoJudge_f( g ) ){ return; }
    
    // 二者択一に迫られたら, ここで終了
    if( this.yesnoFlag == true ){ return; }

    // ステータスバー描画 未実装
//    if( this.flagDisplayStatus ){
      this.displayConfigWindow( g, true, true, true, true );
//      this.flagDisplayStatus = false;
//    }

    // TODO 攻撃処理 未実装

    // プレイヤー移動 
    if( /* this.mapFlagAll != false  && */ this.inputKey && !this.attackFlag ){
      // if( this.movingSkip != 0 ){
      //   this.movingSkip -= 1;
      // }else{
        this.moveCharacter( g );
      // }
    }

    // 再描画の必要がある時
    // if( this.g_iRepaintRetry > 0 ){
    //   this.mapFlagAll = true;
    //   this.wwaData.mapFlagErase = false;
    //   this.g_iRepaintRetry -= 1;
    // }

    // マップ全描画
    // if( this.mapFlagAll ){
    //   this.repaintSkip = true;
       this.paintMapAll( g, true );
       

    //   this.repaintSkip = false;
    //   this.movingSkip = 3;
    // }


    // TODO ステータスバー描画 未実装

    // TODO マップ描画 paintmap() 未実装

    // メッセージ処理
    if( this.messageFlag ){
      this.MessageCheck( g );
    }
    
  }

  imgCopy(
    destG : CanvasRenderingContext2D,
    srcElement : HTMLCanvasElement,
    destX : number,
    destY : number
  ){
    var img : HTMLImageElement = new Image();
    img.src = srcElement.toDataURL();
//    img.onload = function(){
      destG.drawImage( img, destX, destY );
//    }
  }
  
  yesnoJudge_f( g: CanvasRenderingContext2D ) : bool{
    var k : number;
    if( this.charaY / 5 > 6 ){ k -= 2; }

    // アイテム仕様時
    if(
      this.yesnoNumber ==  this.YESNO_USEITEM &&
      this.strMessage[ 8 ] === "BLANK"
    ){
//      this.UseItem( g );
      this.yesnoNumber = this.YESNO_NONE;
      this.yesnoFlag = false;
    }

    // 共通処理
    if( this.yesnoNumber != this.YESNO_NONE ){
      var imgx : HTMLImageElement;
      var imgx1 : HTMLImageElement;
      imgx = new Image();
      if( !this.yesnoFlag ){
        this.gBuffMap.fillStyle = "white";
        this.gBuffMap.fillRect( 0, 0, 40, 40 );
//        if( this.yesnoJudge == this.YESNO_YES ){
//          this.gBuffMap.drawImage( this.wwaData.imgCrop[ this.CROP_YES2 ], 0, 0 );
//          this.imgCopy( this.gBuff, this.imgBuffMap, this.yesnoX + 2, this.yesnoY + 2 );
//        }
        this.gBuffMap.fillStyle = "white";
        this.gBuffMap.fillRect( 0, 0, 40, 40 );
//        if( this.yesnoJudge == this.YESNO_NO ){
//          this.gBuffMap.drawImage( this.wwaData.imgCrop[ this.CROP_NO2 ], 0, 0 );
//          this.imgCopy( this.gBuff, this.imgBuffMap, this.yesnoX + 2 + 40, this.yesnoY + 2 );
//        }
        this.imgCopy( g, this.imgBuff, 0, 0 );
        this.imgCopy( g, this.imgBuffStatus, 440, 0 );
      }      

      // TODO 必要なやつ以外は実装していません
      // あとでちゃんと実装してください

      // 8: サウンドデータの読み込み確認
      if( this.yesnoNumber == this.YESNO_SOUND ){
        if(
          this.g_iSoundLoadState == this.SOUNDLOAD_COMPLETE ||
          this.g_iSoundLoadState == this.SOUNDLOAD_OFF
        ){
          return true;
        }

        var y : number = 360;
        if( this.wwaData.g_szMessageSystem[ 2 ] === "" ){
          this.yesnoJudgeSub( this.gBuff, g, "効果音データをロードしますか?", 50, 0, 296 );
        }else if( this.wwaData.g_szMessageSystem[ 2 ] === "ON" ){
          this.yesnoJudge = this.YESNO_YES;
          y = 230;
          // this.DisplayMessage( "ゲームを開始します。 \n画面をクリックしてください。", true );
          this.yesnoNumber  = this.YESNO_NONE;
        }else if( this.wwaData.g_szMessageSystem[ 2 ] === "OFF" ){
          this.yesnoJudge = this.YESNO_NO;
          // this.DisplayMessage( "ゲームを開始します。 \n画面をクリックしてください。", true );
          this.yesnoNumber  = this.YESNO_NONE;
        }else{ // オリジナルメッセージ
          this.yesnoJudgeSub( this.gBuff, g, this.wwaData.sz_MessageSystem[ 2 ], 50, 0, 296 );
        }
        this.yesnoFlag = false;

        // 効果音を読み込む場合
        if( this.yesnoJudge == this.YESNO_YES ){
          g.fillStyle = "black";
          g.font = "22px TimesRoman";
          g.fillText("Now Sound data Loading .....", 50, y);
          this.g_iSoundLoadState = this.SOUNDLOAD_LOADING
          // TODO 必須効果音ロード
          for ( var j = 1; j <= 3; j++ ){
//            if( j != 2 ){ getAudioClipSub( j );
          }
          
          // 全ての背景パーツを探索し, 必要なファイルをロード
          for( var i = 0; i < this.wwaData.g_iMapPartsMax; i++ ){
            var j = this.wwaData.mapAttribute[ i ][ this.ATR_SOUND ]
//            if( j != 0 && j < 100 && this.audio[ j ] == null ){
//              getAudioClipSub( j );
//            }
          }

          // 全ての背景パーツを探索し, 必要なファイルをロード
          for( var i = 0; i < this.wwaData.g_iObjectPartsMax; i++ ){
            var j = this.wwaData.objectAttribute[ i ][ this.ATR_SOUND ]
//            if( j != 0 && j < 100 && this.audio[ j ] == null ){
//              getAudioClipSub( j );
//            }
          }
          this.soundFlag = true;

          g.fillText("Now Sound data Loading ..... Complete!", 50, y);

          setTimeout( function(){
            wwa.g_iSoundLoadState = wwa.SOUNDLOAD_COMPLETE;
            wwa.yesnoNumber  = wwa.YESNO_NONE;
          }, 500 );
        }else if( this.yesnoJudge == this.YESNO_NO ){
          this.soundFlag = false;
          setTimeout( function(){
            wwa.g_iSoundLoadState = wwa.SOUNDLOAD_OFF;
            wwa.yesnoNumber  = wwa.YESNO_NONE;
          }, 250 );
        }
        return false;
      }
    }else{
      this.g_msgWindow.hide();
    }
    return true;
  }

  yesnoJudgeSub(
    buf : CanvasRenderingContext2D,
    g : CanvasRenderingContext2D,
    msg : string,
    x : number,
    y : number,
    ynX : number
  ){
    y = ( y == 0 ? -3 : y );
    if( this.yesnoFlag ){
      this.yesnoX = ynX;
      if( this.yesnoNumber == this.YESNO_SOUND ){
        this.gBuff.fillStyle = "white";
        this.gBuff.fillRect( 0, 0, 440, 440 );
        this.gBuffStatus.fillStyle = "white";
        this.gBuffStatus.fillRect( 0, 0, 120, 440 );
        this.drawJapaneseFrame( this.gBuff, null, msg, x, y );
      }else{
        this.drawJapaneseFrame( buf, g, msg, x, y );
      }
      this.yesnoY = this.g_iYesnoY;
      this.yesnoFlag = false;
    }
  }

  
  drawJapaneseFrame(
    buf: CanvasRenderingContext2D,
    g : CanvasRenderingContext2D,
    msg : string,
    x : number,
    y : number
  ){
    var lx : number = 340;
    var ly : number  = 174;
    var lines : number;
    // drawJapanese関数では, マクロ解析など, 非常に高度なことをやっている.
    // 戻り値は行数であるが,とりあえずは効果音選択が動けばいいので
    // 後回しにしておく. ( TODO )
//    lines = drawJapanese( buf, msg, 0, 0, 16, true, true );
    lines = 1; // drawJapaneseが完成するまでの暫定
    if( lines == 0 ){ return false; }
    ly = 22 * lines + 20;
    if( this.yesnoFlag ){ ly += 40; }
    if (y == -3){ y = 220 - ly / 2; }
    if (y == -2){
      y = 110 - ly / 2 + 10;
      if (y < 20){ y = 20; }
    }
    if (y == -1){
      y = 330 - ly / 2 - 10;
      if (y + ly > 420){ y = 420 - ly; }
    }
    this.g_iYesnoY = ( y + 22 * lines + 8 );
    if( g != null ){
      this.drawJapaneseFrameSub( g, msg, x, y, lx, ly, true );
      // paintMapAll( g, false );
      this.drawJapaneseFrameSub( buf, msg, x, y, lx, ly, false );
    }else{
      this.drawJapaneseFrameSub( buf, msg, x, y, lx, ly, false );
    }
    return true;

  }

  //////   このブランチでの最大の変更点です!!!!!!!! //////
  drawJapaneseFrameSub(
    g : CanvasRenderingContext2D,
    msg : string,
    x : number,
    y : number,
    lx : number,
    ly : number,
    flag : bool
  ){
    g.fillStyle = "rgb(96,96,96)";
    this.g_msgWindow.setPosition( x - 2, y - 2, lx + 4, ly + 4 );
    this.g_msgWindow.setMessage( msg );
    this.g_msgWindow.show();
  }



  graficLoading( g : CanvasRenderingContext2D ){
    if( !this.g_bImageLoadStart ){
      this.g_bImageLoadStart = true;
      this.imgMap = new Image();
      this.imgMap.src = this.wwaData.mapcgName + "?" + new Date().getTime();
      this.imgMap.onload = function(){
        wwa.LoadingMessage( g, 3 );
        wwa.g_bImageLoadComplete = true;
        console.log( wwa.wwaData.mapcgName + " Load Complete!" );
      }
      this.imgMap.onerror = function(){
        wwa.g_imageNotFound = true;
        console.log( wwa.wwaData.mapcgName + " Not found!" );
      }
    }
    if( this.g_bImageLoadComplete && !this.g_bImageClipStart ){
      this.g_bImageClipStart = true;
      var height : number = this.imgMap.height;
      var x : number, y : number;
      var n : number = 4; // システム上最低限必要になる縦のマス数
      for( var i = 0; i < this.wwaData.g_iMapPartsMax; i++ ){
        x = this.wwaData.mapAttribute[ i ][ this.ATR_X ] / 40;
        y = this.wwaData.mapAttribute[ i ][ this.ATR_Y ] / 40;
        if( y >= ( height + 39 ) / 40 ){
          this.wwaData.mapAttribute[ i ][ this.ATR_CROP1 ] = 0;
        }else{
           n = y > n ? y : n;
           this.wwaData.mapAttribute[ i ][ this.ATR_CROP1 ] = ( x + y * 10 );
        }
      }
      for( var i = 0; i < this.wwaData.g_iObjectPartsMax; i++ ){
        x = this.wwaData.objectAttribute[ i ][ this.ATR_X ] / 40;
        y = this.wwaData.objectAttribute[ i ][ this.ATR_Y ] / 40;
        if( y >= ( height + 39 ) / 40 ){
          this.wwaData.objectAttribute[ i ][ this.ATR_CROP1 ] = 0;
        }else{
           n = y > n ? y : n;
           this.wwaData.objectAttribute[ i ][ this.ATR_CROP1 ] = ( x + y * 10 );
        }
        x = this.wwaData.objectAttribute[ i ][ this.ATR_X2 ] / 40;
        y = this.wwaData.objectAttribute[ i ][ this.ATR_Y2 ] / 40;
        if( y >= ( height + 39 ) / 40 ){
          this.wwaData.objectAttribute[ i ][ this.ATR_CROP2 ] = 0;
        }else{
           n = y > n ? y : n;
           this.wwaData.objectAttribute[ i ][ this.ATR_CROP2 ] = ( x + y * 10 );
        }
      }
      if( height != -1 ){ // -1: ERROR ????
        this.wwaData.g_iCropMax = ( Math.floor( ( height - 1 ) / 40 ) + 1 ) * 10;
      }else{ // この場合, 上4行のみのロード
        this.wwaData.g_iCropMax = ( n + 1 ) * 10;
      }
      var cpe = <HTMLCanvasElement> document.createElement( "canvas" );
      cpe.setAttribute( "id", "clipping" );
      cpe.setAttribute( "width", "40" );
      cpe.setAttribute( "height", "40" );
      this.canvasWrapper.appendChild( cpe );
      var cptx = cpe.getContext( "2d" );
      if( !this.USE_DEBUG_CANVAS ){
        cpe.style.display = "none";
      }
      this.wwaData.imgCrop = new Array( this.wwaData.g_iCropMax );
      this.g_iCropLoadNum = 0;
      for( this.cropID = 0; this.cropID < this.wwaData.g_iCropMax; this.cropID++ ){
        cptx.clearRect( 0, 0, 40, 40 );
        cptx.drawImage(
            this.imgMap, this.cropID % 10 * 40, Math.floor( this.cropID / 10 ) * 40,
            40, 40, 0, 0, 40, 40
            );
        this.wwaData.imgCrop[ this.cropID ] = new Image();
        this.wwaData.imgCrop[ this.cropID ].src = cpe.toDataURL();
        this.wwaData.imgCrop[ this.cropID ].onload = function(){
          wwa.g_iCropLoadNum++;
        }
      }
      this.g_bImageClipComplete = true;
      this.LoadingMessage( g, 4 );
      this.g_cropTimer = setInterval( function(){
        if( wwa.g_iCropLoadNum == wwa.wwaData.g_iCropMax ){
          wwa.g_bLoadComplete = true;
          clearInterval( wwa.g_cropTimer );
        }
      }, 100 );
    }
  }

  LoadingMessage( g : CanvasRenderingContext2D, mode : number){
    g.fillStyle = "white";
    g.fillRect(0, 0, 560, 440); 
    g.fillStyle = "black";
    g.font = "32px TimesRoman";
    g.fillText("Welcome to WWA.js!", 100, 70);
    g.font = "18px TimesRoman";
    g.fillText("(C)1996-2009  NAO (Original)", 70, 405);
    g.fillText("(C)2013  rmn. (JS Version)  Ver 3.02-js pre-α1", 70, 430);
    g.font = "22px TimesRoman";
    if (mode >= 0 ){
      g.fillText("Now Map data Loading .....", 50, 140);
    }
    if (mode >= 1){
      g.fillText("Now Map data Loading ..... Complete!", 50, 140);
      g.fillText("Now CG data Loading .....", 50, 170);
    }
    if (mode >= 3){
      g.fillText("Now CG data Loading ..... Complete!", 50, 170);
      g.fillText("Now Making chara CG .....", 50, 200);
    }
    if (mode >= 4){
      g.fillText("Now Making chara CG ..... Complete!", 50, 200);
    }
    if (mode >= 1){
      g.font = "18px TimesRoman";
      g.fillText("World Name:  " + this.wwaData.worldName, 160, 380);
    }
  }

  MessageCheck( g : CanvasRenderingContext2D ){
    // TODO 実装
  }

  twait( ms : number ){
    setTimeout( _dummy, ms ); 
  }

  paintMapAll( g : CanvasRenderingContext2D, mode : bool ){
    // this.mapFlagAll = false;

    // 灰色四角のフェードアウト 
    // twait 関数は正常に動かないので, この機能は正常に動作しません.
    // ----------- ここから ------------
    if( this.g_bFadeBlack ){
      this.g_bFadeBlack = false;
      g.strokeStyle = "gray";
      g.fillStyle = "gray";

      // TODO: ここ全体をsetTimeoutに置き換える
      for( var k = 0; k < 220; k++ ){
        g.strokeRect( k, k, 440 - k * 2, 440 - k * 2 );
        if( k % 10 == 0 ){
          this.twait( 20 );
        }
      }
      this.twait( 20 );
      g.fillRect( 0, 0, 440, 440 );
      this.wwaData.mapFlagErase = true;
    }
    if( this.wwaData.mapFlagErase && mode ){
      this.wwaData.mapFlagErase = false;
      for( var j = 0; j < 11; j++ ){
        for( var i = 0; i < 11; i++ ){
//          this.displayCharacter( g, this.mapX * 10, j + this.mapY * 10 );
        }
        this.twait( 20 );
      }
    }
    // ----------- ここまで動きません ---------
    this.gBuff.fillStyle = "gray";
    this.gBuff.fillRect( 0, 0, 440, 440 );
    for( var j = 0; j < 11; j++ ){
      for( var i = 0; i < 11; i++ ){
        // 背景パーツ番号抽出
        var m = this.wwaData.map[
          j + this.wwaData.mapY * 10
        ][
          i + this.wwaData.mapX * 10
        ];

        // 背景画像ID抽出
        this.cropID = this.wwaData.mapAttribute[ m ][ this.ATR_CROP1 ];

        // 指定位置に背景パーツを描画
        this.gBuff.drawImage( this.wwaData.imgCrop[ this.cropID ], i * 40, j * 40 );

        // プレイヤー描画
        if(
            Math.floor( this.wwaData.charaX / 5 ) == i && Math.floor( this.wwaData.charaY / 5 ) == j  &&
            this.wwaData.charaX % 5 == 0 && this.wwaData.charaY % 5 == 0
          ){
          this.gBuff.drawImage(
              this.wwaData.imgCrop[ this.cropIDchara ], i * 40, j * 40
          );
        }

        // 物体パーツ番号抽出
        m = this.wwaData.mapObject[
          j + this.wwaData.mapY * 10
        ][
          i + this.wwaData.mapX * 10
        ];

        // パーツ番号が0でなく, 描画範囲にあれば,
        if(
            m != 0 &&
            !this.CheckNoDrawParts(
              m, Math.floor( this.wwaData.charaX / 5 ), i, Math.floor( this.wwaData.charaY / 5 ), j 
            )
          ){
          // アニメーションの間隔から, どちらの画像を描画するか判定
          if(
              this.countAnimation % 44 < 22 ||
              this.wwaData.objectAttribute[ m ][ 2 ] == 0
            ){
            this.cropID = this.wwaData.objectAttribute[ m ][ this.ATR_CROP1 ];
          }else{
            this.cropID = this.wwaData.objectAttribute[ m ][ this.ATR_CROP2 ];
          }
          //物体パーツ描画
          this.gBuff.drawImage( this.wwaData.imgCrop[ this.cropID ], i * 40, j * 40 );
        }
      }
    }

    this.countAnimation += 1; // 仮設置. 物体パーツ依存のアニメーションスピードになるのでfor文から出した. 本番ではsetMapFlag関数使用のこと.

    // マップの枠
    for( var j = 0; j < 11; j++ ){
      for( var i = 0; i < 11; i++ ){
      // 未実装
      //  paintFrame2( this.gBuff, i, j, i * 40, j * 40 );
      }
    }
    if( mode ){
      g.drawImage( this.imgBuff, 0, 0 );
    }

    // サイドバーの描画
    this.displayConfigWindow( g, true, true, true, true );
  }
  
  CheckNoDrawParts(
    objPartsID : number,
    x : number,
    xInWindowParts : number,
    y : number,
    yInWindowParts : number
  ) : bool{
    return (
       x == xInWindowParts  &&
       y == yInWindowParts  &&
      this.g_bDefault == 0  && ( 
        (
          this.wwaData.objectAttribute[ objPartsID ][ this.ATR_NUMBER ] == 0  &&
          this.wwaData.objectAttribute[ objPartsID ][ this.ATR_TYPE ] ==
            this.OBJECT_DOOR
        ) ||
        this.wwaData.objectAttribute[ objPartsID ][ this.ATR_TYPE ] ==
          this.OBJECT_STATUS ||
        this.wwaData.objectAttribute[ objPartsID ][ this.ATR_TYPE ] ==
          this.OBJECT_MESSAGE ||
        this.wwaData.objectAttribute[ objPartsID ][ this.ATR_TYPE ] ==
          this.OBJECT_SELL ||
        this.wwaData.objectAttribute[ objPartsID ][ this.ATR_TYPE ] ==
          this.OBJECT_BUY ||
        this.wwaData.objectAttribute[ objPartsID ][ this.ATR_TYPE ] ==
          this.OBJECT_SELECT ||
        this.wwaData.objectAttribute[ objPartsID ][ this.ATR_TYPE ] ==
          this.OBJECT_LOCALGATE
      )
    );
  }

  displayConfigWindow(
      g : CanvasRenderingContext2D,
      drawNewImage : bool,
      drawStatus : bool,
      drawItem : bool,
      drawBase : bool
      ){
    if( !drawNewImage ){
      g.drawImage( this.imgBuffStatus, 440, 0 );
      return;
    }
    if( drawBase ){
      var localFont : Font = new Font( "TimesRoman", 1, 18 );

      // サイドバーの背景ベース描画
      this.gBuffStatus.font = localFont.getStyleForCanvas();
      this.gBuffStatus.fillStyle = "gray";
      this.gBuffStatus.fillRect( 0, 0, 120, 440 );

      // 横長ボタン背景の描画
      for( var i = 0; i < 4; i++ ){
        for( var j = 0; j < 3; j++ ){
          this.gBuffStatus.drawImage(
            this.wwaData.imgCrop[ j + 34 ],
            j * 40, 300 + i * 35 
          );
        }
      }

      // 上ステータス背景の描画
      this.gBuffButton.fillStyle = "black";
      this.gBuffButton.fillRect( 0, 0, 120, 35 );
      for( var j = 0; j < 3; j++ ){
        this.gBuffButton.drawImage( this.wwaData.imgCrop[ j + 34 ], j * 40 + 3, 3 );
      }

      // QuickSave済ならQuickLoadを描画, そうでないならPasswordを描画
      if( this.quickSaveFlag ){
        this.displayPushButton( this.YESNO_QLOAD, "Quick Load", 18, 0, 300, 120, 35 );
      }else{
        this.displayPushButton( this.YESNO_TEXTLOAD, "Password", 18, 0, 300, 120, 35 );
      }
      this.displayPushButton( this.YESNO_QSAVE, "Quick Save", 18, 0, 335, 120, 35 );
      this.displayPushButton( this.YESNO_RESTART, "RestartGame", 16, 0, 370, 120, 35 );
      this.displayPushButton( this.YESNO_WWAH, "Goto WWA", 18, 0, 405, 120, 35 );
    }

    if( drawStatus ){
      // 内部パラメータで最大生命力を上回っている場合
      if(
        this.wwaData.statusEnergyMax != 0 &&
        this.wwaData.statusEnergy > this.wwaData.statusEnergyMax
      ){
        this.wwaData.statusEnergy = this.statusEnergyMax;
      }

      // ステータスの背景描画
      for( var i = 0; i < 4; i++ ){
        for( var j = 0; j < 3; j++ ){
          this.gBuffStatus.drawImage(
            this.wwaData.imgCrop[ j + 34 ],
            j * 40, i * 35
          );
        }
      }

      // 各種ステータスのアイコンを描画
      this.gBuffStatus.drawImage(
        this.wwaData.imgCrop[ this.CROP_ENERGY ], 6, 0
      );
      this.gBuffStatus.drawImage(
        this.wwaData.imgCrop[ this.CROP_STRENGTH ], 6, 35 
      );
      this.gBuffStatus.drawImage(
        this.wwaData.imgCrop[ this.CROP_DEFENCE ], 6, 70 
      );
      this.gBuffStatus.drawImage(
        this.wwaData.imgCrop[ this.CROP_GOLD ], 6, 105
      );

      // 内部パラメータで生命力が負になっている場合
      if( this.wwaData.statusEnergy < 0 ){
        this.wwaData.statusEnergy = 0;
      }

      // 各種ステータスの描画 beta
      var localFont : Font = new Font( "TimesRoman", 1, 18 );
      this.gBuffStatus.font = localFont.getStyleForCanvas();
      this.gBuffStatus.textAlign = "right";
      this.gBuffStatus.fillText(
        this.wwaData.statusEnergy + "", 110 , 0 + 18 + 8, 82
      );
      this.gBuffStatus.fillText(
        this.wwaData.statusStrength + "", 110 , 35 + 18 + 8, 82 
      );
      this.gBuffStatus.fillText(
        this.wwaData.statusDefence + "", 110, 70 + 18 + 8, 82
      );
      this.gBuffStatus.fillText(
        this.wwaData.statusGold + "", 110, 105 + 18 + 8, 82
      );
      this.gBuffStatus.textAlign = "start";
    }

    // TODO ここから下、あまりよく見ていません バグあるかも.
    var img : HTMLImageElement;
    if( drawItem ){
      for( var i = 0; i < 4; i++ ){
        for( var j = 0; j < 3; j++ ){
          var itemBoxID = i * 3 + j;
          this.gBuffStatus.drawImage(
              this.wwaData.imgCrop[ 21 ], j * 40, 140 + i * 40
              );
          if(
              this.wwaData.itemBox[ itemBoxID ] != 0 ||
              ( itemBoxID == this.itemboxBuff && this.g_iUseItem > 0 )
            ){
            var crop : number;
            if( itemBoxID == this.itemboxBuff && this.g_iUseItem > 0 ){
              crop =
                this.wwaData.objectAttribute
                [ this.g_iUseItem ][ this.ATR_CROP1 ];
            }else{
              crop =
                this.wwaData.objectAttribute[
                this.wwaData.itemBox[ itemBoxID ]
                ][
                this.ATR_CROP1
                ];
            }
            if(
                this.wwaData.objectAttribute[
                this.itemBox[ itemBoxID ]
                ][
                this.ATR_MODE
                ] == 0 &&
                itemBoxID != this.itemboxBuff 
              ){
              this.gBuffStatus.drawImage(
                  this.imgCrop[ itemBoxID ], 
                  j * 40, 140 + i * 40
              );
            }else{
              var n = 0;
              if(
                  this.g_iUseItem > 0 &&
                  itemBoxID == this.itemboxBuff
                ){
                this.gBuffMap.fillStyle = "black";
                this.gBuffMap.fillRect( 0, 0, 40, 40 );
                n = 3;
              }
              this.gBuffMap.drawImage( this.imgCrop[ 21 ], n, n );
              for( var k = 0; k < 5; k++ ){
                if( k % 2 == 1 ){
                  this.gBuffMap.strokeStyle = "white"
                }else{
                  this.gBuffMap.strokeStyle = "red"
                }
                this.gBuffMap.strokeRect(
                    k + 1 + n, k + 1 + n, 37 - k * 2, 37 - k * 2
                    );
              }
              this.gBuffMap.drawImage(
                  this.wwaData.imgCrop[ itemBoxID ], n, n 
              );
              img.src = this.imgBuffMap.toDataURL();
              this.gBuffStatus.drawImage(
                  img, j * 40, 140 + i * 40 
              );
            }
          }
        }
      }
    }
    // TODO 危ない区間 ここまで

    /*
    var img : HTMLImageElement;
    img = new Image();
    img.src = this.imgBuffButton.toDataURL();
    g.drawImage( img, 440, 0 );
    */
  }

  displayPushButton(
    yesnoNumber : number,
    buttonLabel : string,
    fontSize : number,
    x : number,
    y : number,
    width : number,
    height: number
  ){
    var localFont : Font = new Font( "TimesRoman", 0, fontSize );
    this.gBuffStatus.font = localFont.getStyleForCanvas();
    //this.gBuffStatus.fillStyle = "rgb(160, 128, 96)";
    this.gBuffStatus.fillStyle = "rgb(0, 0, 0)";

    if( this.yesnoNumber == yesnoNumber ){ // pressed
      // 黒枠
      var img : HTMLImageElement;
      img = new Image();
      img.src = this.imgBuffButton.toDataURL();
      this.gBuffStatus.drawImage( img, 0, y );

      
      // ボタン本体(の文字列)
      // TODO drawHalfStringの実装, fillTextを代替.
      this.gBuffStatus.fillText( buttonLabel, x + 3 + 10, y + 3 + fontSize + 8 );
    }else{
      this.gBuffStatus.fillText( buttonLabel, x + 10, y + fontSize + 8 );
    }
  }

  // TODO 未実装
  moveCharacter(
    g : CanvasRenderingContext2D
  ){
    if( this.wwaData.charaX % 5 == 0 && this.wwaData.charaY % 5 == 0 ){
      // if( pointCheck( g ) ){ return; }


    }
  }
  getLocalPosition( mx, my ) : any{
    var cx, cy;
    var sx =
      window.pageXOffset || 
      document.body.scrollLeft ||
      document.documentElement.scrollLeft;
    var sy =
      window.pageYOffset || 
      document.body.scrollTop ||
      document.documentElement.scrollTop;

    cx = mx - this.canvasWrapper.offsetLeft + sx;
    cy = my - this.canvasWrapper.offsetTop + sy;

    return { "x": cx, "y": cy }; 
  }

  
}

class Font{
  name : string;
  fontStyle : number;
  size : number;

  // TODO fontStyle -> PLAIN, BOLD, ITALIC, の実装
  constructor( name : string, fontStyle : number, size : number ){
    this.name = name;
    this.fontStyle = fontStyle;
    this.size = size;
  }
  getSize() : number{
    return this.size;
  }

  getSizePX() : string{
    return this.size + " px";
  }
  
  getStyleForCanvas() : string{
    return this.size + "px " + this.name;
  }
};

class WWACanvas{
  width : number;
  height: number;
  idName: string;
  isVisible : bool;
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  
  constructor(
    parentElement : HTMLElement,
    idName : string,
    width : number,
    height : number,
    isVisible : bool
  ){
    this.width = width;
    this.height = height;
    this.element = <HTMLCanvasElement> document.createElement( "canvas" );
    this.element.setAttribute( "id", idName );
    this.element.setAttribute( "width", this.width + "" );
    this.element.setAttribute( "height", this.height + "" );
    this.isVisible = isVisible;
    if( !isVisible ){
      this.element.style.display = "none";
    }
    this.context = this.element.getContext( "2d" );
    parentElement.appendChild( this.element );
  }

  getElement(){
    return this.element;
  }
  getContext(){
    return this.context;
  }
}

class WWAMessageWindow{
  x: number;
  y: number;
  width: number;
  height: number;
  message: string;
  isVisible: bool;
  isYesno: bool;
  element: HTMLElement;
  msgWrapperElement: HTMLElement;
  dummyElement: HTMLElement;
  ynWrapperElement: HTMLElement;
  imgYesElement: HTMLImageElement;
  imgNoElement: HTMLImageElement;

  divYesElement: HTMLElement;
  divNoElement: HTMLElement;
  parentElement: HTMLElement;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    message: string,
    isVisible: bool,
    isYesno: bool,
    parentElement: HTMLElement
  ){
    var thisA = this;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.message = message;
    this.isVisible = isVisible;
    this.isYesno = isYesno;
    this.element = document.createElement( "div" );
    this.element.style.position = "absolute";
    this.element.style.border = "1px solid #000000";
    this.element.style.borderRadius = "5px";
    this.element.style.backgroundColor = "#FFFFFF";
    this.element.style.zIndex = "5";
    this.element.style.opacity = "0.8";
    this.msgWrapperElement = document.createElement( "div" );
    this.msgWrapperElement.style.padding = "5px";
    this.msgWrapperElement.style.margin = "0";
    this.msgWrapperElement.style.textAlign = "left";
    this.msgWrapperElement.style.wordWrap = "break-word";
    this.element.appendChild( this.msgWrapperElement );
    this.dummyElement = document.createElement( "div" );
    this.dummyElement.style.display = "none";
    this.dummyElement.style.padding = "0";
    this.dummyElement.style.margin = "0";
    this.dummyElement.style.height = "55px";
    this.element.appendChild( this.dummyElement );
    this.ynWrapperElement = document.createElement( "div" );
    this.ynWrapperElement.style.padding = "0";
    this.ynWrapperElement.style.margin = "0";
    this.ynWrapperElement.style.position = "absolute";
    this.ynWrapperElement.style.left = "246px";
    this.ynWrapperElement.style.bottom = "10px";
    this.ynWrapperElement.style.width = "80px";
    this.ynWrapperElement.style.height = "40px";
    this.ynWrapperElement.style.zIndex = "10";
    this.element.appendChild( this.ynWrapperElement );
    this.parentElement = parentElement;
    this.parentElement.appendChild( this.element );
    this.divYesElement = document.createElement( "div" );
    this.divYesElement.style.padding = "0";
    this.divYesElement.style.margin = "0";
    this.divYesElement.style.cssFloat = "left";
    this.divYesElement.style.width = "40px";
    this.divYesElement.style.height = "40px";
    this.divYesElement.style.background =
      "url(" + wwa.wwaData.imgCrop[ wwa.CROP_YES ].src + ")";
    this.divYesElement.onclick = function(){
      wwa.yesnoJudge = wwa.YESNO_YES;
      thisA.update();
    };
    this.divNoElement = document.createElement( "div" );
    this.divNoElement.style.padding = "0";
    this.divNoElement.style.margin = "0";
    this.divNoElement.style.cssFloat = "left";
    this.divNoElement.style.width = "40px";
    this.divNoElement.style.height = "40px";
    this.divNoElement.style.background =
      "url(" + wwa.wwaData.imgCrop[ wwa.CROP_NO ].src + ")";
    this.divNoElement.onclick = function(){
      wwa.yesnoJudge = wwa.YESNO_NO;
      thisA.update();
    };
    this.ynWrapperElement.appendChild( this.divYesElement );
    this.imgNoElement = wwa.wwaData.imgCrop[ wwa.CROP_NO ];
    this.ynWrapperElement.appendChild( this.divNoElement );

    this.update();
  }
  setPosition( x: number, y: number, width: number, height: number ){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.update();
  }

  setMessage( message: string ){
    this.message = message;
    this.update();
  }
  show(){
    this.isVisible = true;
    this.update();
  }
  hide(){
    this.isVisible = false;
    this.update();
  }
  update(){
    if( this.isYesno ){
      if( wwa.yesnoJudge == wwa.YESNO_YES ){
        this.divYesElement.style.background = 
          "url(" + wwa.wwaData.imgCrop[ wwa.CROP_YES2 ].src + ")";
        this.divNoElement.style.background = 
          "url(" + wwa.wwaData.imgCrop[ wwa.CROP_NO ].src + ")";

      }else if( wwa.yesnoJudge == wwa.YESNO_NO ){
        this.divYesElement.style.background = 
          "url(" + wwa.wwaData.imgCrop[ wwa.CROP_YES ].src + ")";
        this.divNoElement.style.background = 
          "url(" + wwa.wwaData.imgCrop[ wwa.CROP_NO2 ].src + ")";
      }else{
        this.divYesElement.style.background = 
          "url(" + wwa.wwaData.imgCrop[ wwa.CROP_YES ].src + ")";
        this.divNoElement.style.background = 
          "url(" + wwa.wwaData.imgCrop[ wwa.CROP_NO ].src + ")";
      }
      this.ynWrapperElement.style.display = "block";
    }else{
      this.ynWrapperElement.style.display = "none";
    }
    this.msgWrapperElement.innerHTML = this.message;
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.element.style.width = this.width + "px";
    this.element.style.minHeight = this.height + "px"; // minなのでoverflowしても安心!!!
    this.dummyElement.style.display = this.isYesno ? "block":  "none";
    this.element.style.display = this.isVisible ? "block" : "none";
  }

}

var _dummy = function(){};

var wwa;

window.onload = function(){
  wwa = new WWA( "wwa" );
};

function wran( t : number){
  wwa.run( t );
}
