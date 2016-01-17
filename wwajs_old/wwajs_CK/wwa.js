var WWA = (function () {
    function WWA(eID) {
        this.USE_DEBUG_CANVAS = false;
        this.ATR_0 = 0;
        this.ATR_CROP1 = 1;
        this.ATR_CROP2 = 2;
        this.ATR_TYPE = 3;
        this.ATR_MODE = 4;
        this.ATR_STRING = 5;
        this.ATR_X = 6;
        this.ATR_Y = 7;
        this.ATR_X2 = 8;
        this.ATR_Y2 = 9;
        this.ATR_ENERGY = 10;
        this.ATR_STRENGTH = 11;
        this.ATR_DEFENCE = 12;
        this.ATR_GOLD = 13;
        this.ATR_ITEM = 14;
        this.ATR_NUMBER = 15;
        this.ATR_JUMP_X = 16;
        this.ATR_JUMP_Y = 17;
        this.ATR_SOUND = 19;
        this.ATR_MOVE = 16;
        this.MAP_STREET = 0;
        this.MAP_WALL = 1;
        this.MAP_LOCALGATE = 2;
        this.MAP_URLGATE = 4;
        this.OBJECT_NORMAL = 0;
        this.OBJECT_MESSAGE = 1;
        this.OBJECT_URLGATE = 2;
        this.OBJECT_STATUS = 3;
        this.OBJECT_ITEM = 4;
        this.OBJECT_DOOR = 5;
        this.OBJECT_MONSTER = 6;
        this.OBJECT_SCORE = 11;
        this.OBJECT_SELL = 14;
        this.OBJECT_BUY = 15;
        this.OBJECT_RANDOM = 16;
        this.OBJECT_SELECT = 17;
        this.OBJECT_LOCALGATE = 18;
        this.CONFIG_QLOAD_X = 450;
        this.CONFIG_QLOAD_Y = 324;
        this.CONFIG_QSAVE_X = 450;
        this.CONFIG_QSAVE_Y = 359;
        this.CONFIG_RESTART_X = 449;
        this.CONFIG_RESTART_Y = 394;
        this.YESNO_NONE = 0;
        this.YESNO_YES = 1;
        this.YESNO_NO = 2;
        this.YESNO_WWAH = 3;
        this.YESNO_URLGATE = 4;
        this.YESNO_RESTART = 5;
        this.YESNO_SELL = 6;
        this.YESNO_BUY = 7;
        this.YESNO_SOUND = 8;
        this.YESNO_USEITEM = 9;
        this.YESNO_QSAVE = 10;
        this.YESNO_QLOAD = 11;
        this.YESNO_SELECT = 12;
        this.YESNO_TEXTSAVE = 13;
        this.YESNO_TEXTLOAD = 14;
        this.CROP_YES = 13;
        this.CROP_NO = 14;
        this.CROP_YES2 = 15;
        this.CROP_NO2 = 16;
        this.CROP_ENERGY = 23;
        this.CROP_STRENGTH = 24;
        this.CROP_DEFENCE = 25;
        this.CROP_GOLD = 26;
        this.CROP_BOM = 33;
        this.FRAME_ENERGY_X = 446;
        this.FRAME_ENERGY_Y = 0;
        this.FRAME_STRENGTH_X = 446;
        this.FRAME_STRENGTH_Y = 35;
        this.FRAME_DEFENCE_X = 446;
        this.FRAME_DEFENCE_Y = 70;
        this.FRAME_GOLD_X = 446;
        this.FRAME_GOLD_Y = 105;
        this.DATA_CHECK = 0;
        this.DATA_MAP_VERSION = 2;
        this.DATA_STATUS_ENERGY = 10;
        this.DATA_STATUS_STRENGTH = 12;
        this.DATA_STATUS_DEFENCE = 14;
        this.DATA_STATUS_GOLD = 16;
        this.DATA_STATUS_ENERGYMAX = 32;
        this.EX_DATA_CHARA_X = 38;
        this.EX_DATA_CHARA_Y = 40;
        this.EX_DATA_OVER_X = 42;
        this.EX_DATA_OVER_Y = 44;
        this.DATA_IMG_CHARA_CROP = 46;
        this.DATA_IMG_YESNO_CROP = 48;
        this.EX_DATA_ITEM = 60;
        this.DATA_MAP_SIZE = 46;
        this.DATA_MES_NUMBER = 48;
        this.DATA_CHECK_PARTS = 50;
        this.DATA_SAVE_STOP = 52;
        this.EX_DATA_STATUS_ENERGYMAX = 54;
        this.DATA_FLAG_DEFAULT = 56;
        this.DATA_FLAG_OLDMAP = 58;
        this.FREAD_BLOCK = 10000;
        this.MEM_BLOCK = 65000;
        this.SOUND_MAX = 100;
        this.moveDirect = 2;
        this.movePlus = 1;
        this.g_szMessageSystem = new Array(20);
        this.loadingFlag = false;
        this.quickSaveFlag = false;
        this.displayMonsterFlag = false;
        this.gImageNotFound = false;
        this.g_bIOError = false;
        this.g_bAudioError = false;
        this.bDispUseItemMes = true;
        this.g_bAttackJudgeMes = true;
        this.g_bDisplayCenter = false;
        this.g_bJREFont = false;
        this.inputKey = true;
        this.TimerCount = 20;
        this.countAnimation = 0;
        this.waitCounterLast = 0;
        this.g_iRepaintCount = 10;
        this.g_iRepaintRetry = 0;
        this.cropIDchara = 4;
        this.itemboxBuff = -1;
        this.g_iUseItem = 0;
        this.mapFrame = [
            [
                0, 
                40
            ], 
            [
                40, 
                40
            ], 
            [
                80, 
                40
            ], 
            [
                0, 
                80
            ], 
            [
                40, 
                80
            ], 
            [
                80, 
                80
            ], 
            [
                0, 
                120
            ], 
            [
                40, 
                120
            ], 
            [
                80, 
                120
            ], 
            [
                120, 
                40
            ], 
            [
                160, 
                40
            ], 
            [
                200, 
                40
            ], 
            [
                240, 
                40
            ], 
            [
                120, 
                80
            ], 
            [
                160, 
                80
            ], 
            [
                200, 
                80
            ], 
            [
                240, 
                80
            ], 
            [
                120, 
                120
            ], 
            [
                160, 
                120
            ], 
            [
                200, 
                120
            ], 
            [
                240, 
                120
            ], 
            [
                280, 
                40
            ], 
            [
                320, 
                40
            ], 
            [
                360, 
                40
            ]
        ];
        this.itemBox = [
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0
        ];
        this.g_iImgCharaCrop = 2;
        this.byteBuffPress = new Uint8Array(65000);
        this.QSaveParameter = new Array(50);
        this.g_bSaveStop = 0;
        this.g_bDefault = 0;
        this.g_bOldMap = 0;
        this.soundFlag = false;
        this.g_iMapWidth = 101;
        this.g_iBlockByteBuff = 1;
        this.g_iBlockByteBuffPress = 1;
        this.g_iFileSize = 0;
        this.g_iPageNumber = 0;
        this.g_bFadeBlack = false;
        this.g_szKeyList = "【　ショートカットキーの一覧　】\n\nＦ１：戦闘結果予測の表示\nＦ３：復帰用パスワード入力\nＦ４：復帰用パスワード表示\nＦ５：一時保存データの読み込み\nＦ６：データの一時保存\nＦ７：初めからスタート\nＦ８：ＷＷＡ公式ページにリンク\nＦ１２：このリストの表示\n\nキーボードの「１２３、ＱＷＥ、\nＡＳＤ、ＺＸＣ」は\n右のアイテムボックスに対応。\n\n「リターンキー、Ｙ」はＹＥＳ\n「ＥＳＣキー、Ｎ」はＮＯに対応。";
        this.g_bMapLoadComplete = false;
        this.g_bImageLoadComplete = false;
        this.g_bImageClipComplete = false;
        this.SOUNDLOAD_YET = 0;
        this.SOUNDLOAD_LOADING = 1;
        this.SOUNDLOAD_COMPLETE = 2;
        this.SOUNDLOAD_OFF = 3;
        this.g_bMapLoadStart = false;
        this.g_bImageLoadStart = false;
        this.g_bImageClipStart = false;
        this.g_iCropLoadNum = 0;
        this.g_bLoadComplete = false;
        this.canvas = null;
        this.g = null;
        this.g_dLoadTime = new Date();
        this.canvas = document.getElementById(eID);
        this.g = this.canvas.getContext("2d");
        this.init();
    }
    WWA.prototype.init = function () {
        this.soundFlag = false;
        this.attackFlag = false;
        this.scoreFlag = false;
        this.urlJumpFlag = false;
        this.inputKey = true;
        this.yesnoNumber = 0;
        this.yesnoJudge = 0;
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
        this.canvasWrapper = document.getElementById("canvasWrapper");
        this.imgBuff = document.createElement("canvas");
        this.imgBuff.setAttribute("id", "imgBuff");
        this.imgBuff.setAttribute("width", "440");
        this.imgBuff.setAttribute("height", "440");
        if(!this.USE_DEBUG_CANVAS) {
            this.imgBuff.style.display = "none";
        }
        this.gBuff = this.imgBuff.getContext("2d");
        this.canvasWrapper.appendChild(this.imgBuff);
        this.imgBuffMap = document.createElement("canvas");
        this.imgBuffMap.setAttribute("id", "imgBuffMap");
        this.imgBuffMap.setAttribute("width", "40");
        this.imgBuffMap.setAttribute("height", "40");
        if(!this.USE_DEBUG_CANVAS) {
            this.imgBuffMap.style.display = "none";
        }
        this.gBuffMap = this.imgBuffMap.getContext("2d");
        this.canvasWrapper.appendChild(this.imgBuffMap);
        this.imgBuffStatus = document.createElement("canvas");
        this.imgBuffStatus.setAttribute("id", "imgBuff");
        this.imgBuffStatus.setAttribute("width", "120");
        this.imgBuffStatus.setAttribute("height", "440");
        if(!this.USE_DEBUG_CANVAS) {
            this.imgBuffStatus.style.display = "none";
        }
        this.gBuffStatus = this.imgBuffStatus.getContext("2d");
        this.canvasWrapper.appendChild(this.imgBuffStatus);
        this.canvas.onmousedown = function (e) {
            if(wwa.yesnoNumber != wwa.YESNO_NONE) {
                var lp = wwa.getLocalPosition(e.clientX, e.clientY);
                if(lp.x > wwa.yesnoX && lp.x < wwa.yesnoX + 40 && lp.y > wwa.yesnoY && lp.y < wwa.yesnoY + 40) {
                    wwa.yesnoJudge = wwa.YESNO_YES;
                }
                if(lp.x > wwa.yesnoX + 40 && lp.x < wwa.yesnoX + 80 && lp.y > wwa.yesnoY && lp.y < wwa.yesnoY + 40) {
                    wwa.yesnoJudge = wwa.YESNO_NO;
                }
            }
            return false;
        };
        window.onkeydown = function (e) {
            if(wwa.yesnoNumber != wwa.YESNO_NONE) {
                if(e.keyCode == 89 || e.keyCode == 13) {
                    wwa.yesnoJudge = wwa.YESNO_YES;
                    return false;
                }
                if(e.keyCode == 78 || e.keyCode == 27) {
                    wwa.yesnoJudge = wwa.YESNO_NO;
                    return false;
                }
            }else{
            // debug se
                if( e.keyCode == 37 ){
                  if( wwa.wwaData.mapX > 0 ){
                    wwa.wwaData.mapX--;
                  }
                  return false;
                }else if( e.keyCode == 38 ){
                  if( wwa.wwaData.mapY > 0 ){
                    wwa.wwaData.mapY--;
                  }
                  return false;
                }else if( e.keyCode == 40 ){
                  if( wwa.wwaData.mapY < wwa.wwaData.g_iMapWidth / 10 - 2 ){
                    wwa.wwaData.mapY++;
                  }
                  return false;
                }else if( e.keyCode == 39 ){
                  if( wwa.wwaData.mapX < wwa.wwaData.g_iMapWidth / 10 - 2){
                    wwa.wwaData.mapX++;
                  }
                  return false;
                }
              return true;
            }
            return true;
        };
        console.log("<init>");
        this.start();
    };
    WWA.prototype.start = function () {
        console.log("<start>");
        this.run();
    };
    WWA.prototype.stop = function () {
        console.log("<stop>");
    };
    WWA.prototype.destroy = function () {
        console.log("<destroy>");
    };
    WWA.prototype.run = function () {
        var t;
        this.update();
        if(this.urlJumpFlag) {
            t = 500;
        }
        if(this.yesnoNumber == this.YESNO_SOUND || !this.loadingFlag) {
            t = 200;
        } else {
            t = this.TimerCount;
        }
        setTimeout(wran, t);
    };
    WWA.prototype.update = function () {
        if(!this.repaintSkip) {
            this.paint(this.g);
        }
    };
    WWA.prototype.paint = function (g) {
        g.clearRect(0, 0, 5, 440);
        if(!this.loadingFlag) {
            if(!this.g_bMapLoadStart) {
                this.g_bMapLoadStart = true;
                this.LoadingMessage(g, 0);
                var worker = new Worker("./load.js");
                worker.postMessage({
                    "g": null,
                    "fileName": "island02.dat",
                    "mode": true
                });
                worker.onmessage = function (e) {
                    wwa.wwaData = e.data;
                    wwa.g_bMapLoadComplete = true;
                };
            }
            if(this.g_bMapLoadComplete) {
                if(this.wwaData.errorID != 0) {
                    console.log(this.wwaData.errorMessage);
                    return;
                }
                this.LoadingMessage(g, 1);
                this.graficLoading(g);
                if(this.gImageNotFound) {
                    return;
                }
                if(this.g_bImageClipComplete) {
                    this.yesnoNumber = this.YESNO_SOUND;
                    this.g_iSoundLoadState = this.SOUNDLOAD_YET;
                    this.yesnoFlag = true;
                    this.loadingFlag = true;
                }
            }
        }
        if(!this.g_bLoadComplete) {
            return;
        }
        this.waitCounterLast = 200;
        var img;
        img = new Image();
        img.src = this.imgBuff.toDataURL();
        g.drawImage(img, 0, 0);
        img = new Image();
        img.src = this.imgBuffStatus.toDataURL();
        g.drawImage(img, 440, 0);
        if(!this.yesnoJudge_f(g)) {
            return;
        }
        if(this.yesnoFlag == true) {
            return;
        }
        this.paintMapAll(g, true);
        if(this.messageFlag) {
            this.MessageCheck(g);
        }
    };
    WWA.prototype.imgCopy = function (destG, srcElement, destX, destY) {
        var img = new Image();
        img.src = srcElement.toDataURL();
        destG.drawImage(img, destX, destY);
    };
    WWA.prototype.yesnoJudge_f = function (g) {
        var k;
        if(this.charaY / 5 > 6) {
            k -= 2;
        }
        if(this.yesnoNumber == this.YESNO_USEITEM && this.strMessage[8] === "BLANK") {
            this.yesnoNumber = this.YESNO_NONE;
            this.yesnoFlag = false;
        }
        if(this.yesnoNumber != this.YESNO_NONE) {
            var imgx;
            var imgx1;
            imgx = new Image();
            if(!this.yesnoFlag) {
                this.gBuffMap.fillStyle = "white";
                this.gBuffMap.fillRect(0, 0, 40, 40);
                if(this.yesnoJudge == this.YESNO_YES) {
                    this.gBuffMap.drawImage(this.wwaData.imgCrop[this.CROP_YES2], 0, 0);
                    this.imgCopy(this.gBuff, this.imgBuffMap, this.yesnoX + 2, this.yesnoY + 2);
                }
                this.gBuffMap.fillStyle = "white";
                this.gBuffMap.fillRect(0, 0, 40, 40);
                if(this.yesnoJudge == this.YESNO_NO) {
                    this.gBuffMap.drawImage(this.wwaData.imgCrop[this.CROP_NO2], 0, 0);
                    this.imgCopy(this.gBuff, this.imgBuffMap, this.yesnoX + 2 + 40, this.yesnoY + 2);
                }
                this.imgCopy(g, this.imgBuff, 0, 0);
                this.imgCopy(g, this.imgBuffStatus, 440, 0);
            }
            if(this.yesnoNumber == this.YESNO_SOUND) {
                if(this.g_iSoundLoadState == this.SOUNDLOAD_COMPLETE || this.g_iSoundLoadState == this.SOUNDLOAD_OFF) {
                    return true;
                }
                var y = 360;
                if(this.wwaData.g_szMessageSystem[2] === "") {
                    this.yesnoJudgeSub(this.gBuff, g, "効果音データをロードしますか?", 50, 0, 296);
                } else {
                    if(this.wwaData.g_szMessageSystem[2] === "ON") {
                        this.yesnoJudge = this.YESNO_YES;
                        y = 230;
                    } else {
                        if(this.wwaData.g_szMessageSystem[2] === "OFF") {
                            this.yesnoJudge = this.YESNO_NO;
                        } else {
                            this.yesnoJudgeSub(this.gBuff, g, this.wwaData.sz_MessageSystem[2], 50, 0, 296);
                        }
                    }
                }
                this.yesnoFlag = false;
                if(this.yesnoJudge == this.YESNO_YES) {
                    g.fillStyle = "black";
                    g.font = "22px TimesRoman";
                    g.fillText("Now Sound data Loading .....", 50, y);
                    this.g_iSoundLoadState = this.SOUNDLOAD_LOADING;
                    for(var j = 1; j <= 3; j++) {
                    }
                    for(var i = 0; i < this.wwaData.g_iMapPartsMax; i++) {
                        var j = this.wwaData.mapAttribute[i][this.ATR_SOUND];
                    }
                    for(var i = 0; i < this.wwaData.g_iObjectPartsMax; i++) {
                        var j = this.wwaData.objectAttribute[i][this.ATR_SOUND];
                    }
                    this.soundFlag = true;
                    g.fillText("Now Sound data Loading ..... Complete!", 50, y);
                    setTimeout(function () {
                        wwa.g_iSoundLoadState = wwa.SOUNDLOAD_COMPLETE;
                        wwa.yesnoNumber = wwa.YESNO_NONE;
                    }, 500);
                } else {
                    if(this.yesnoJudge == this.YESNO_NO) {
                        this.soundFlag = false;
                        setTimeout(function () {
                            wwa.g_iSoundLoadState = wwa.SOUNDLOAD_OFF;
                        }, 250);
                    }
                }
                return false;
            }
        }
        return true;
    };
    WWA.prototype.yesnoJudgeSub = function (buf, g, msg, x, y, ynX) {
        y = (y == 0 ? -3 : y);
        if(this.yesnoFlag) {
            this.yesnoX = ynX;
            if(this.yesnoNumber == this.YESNO_SOUND) {
                this.gBuff.fillStyle = "white";
                this.gBuff.fillRect(0, 0, 440, 440);
                this.gBuffStatus.fillStyle = "white";
                this.gBuffStatus.fillRect(0, 0, 120, 440);
                this.drawJapaneseFrame(this.gBuff, null, msg, x, y);
            } else {
                this.drawJapaneseFrame(buf, g, msg, x, y);
            }
            this.yesnoY = this.g_iYesnoY;
            this.yesnoFlag = false;
        }
    };
    WWA.prototype.drawJapaneseFrame = function (buf, g, msg, x, y) {
        var lx = 340;
        var ly = 174;
        var lines;
        lines = 1;
        if(lines == 0) {
            return false;
        }
        ly = 22 * lines + 20;
        if(this.yesnoFlag) {
            ly += 40;
        }
        if(y == -3) {
            y = 220 - ly / 2;
        }
        if(y == -2) {
            y = 110 - ly / 2 + 10;
            if(y < 20) {
                y = 20;
            }
        }
        if(y == -1) {
            y = 330 - ly / 2 - 10;
            if(y + ly > 420) {
                y = 420 - ly;
            }
        }
        this.g_iYesnoY = (y + 22 * lines + 8);
        if(g != null) {
            this.drawJapaneseFrameSub(g, msg, x, y, lx, ly, true);
            this.drawJapaneseFrameSub(buf, msg, x, y, lx, ly, false);
        } else {
            this.drawJapaneseFrameSub(buf, msg, x, y, lx, ly, false);
        }
        return true;
    };
    WWA.prototype.drawJapaneseFrameSub = function (g, msg, x, y, lx, ly, flag) {
        g.fillStyle = "rgb(96,96,96)";
        g.fillRect(x - 2, y - 2, lx + 4, ly + 4);
        g.fillStyle = "white";
        g.fillRect(x, y, lx, ly);
        g.fillStyle = "rgb(96,96,96)";
        g.font = "18px Courier";
        g.fillText(msg, x + 7, y + 27);
        if(this.yesnoFlag) {
            g.drawImage(this.wwaData.imgCrop[this.CROP_YES], this.yesnoX + 2, this.g_iYesnoY + 2);
            g.drawImage(this.wwaData.imgCrop[this.CROP_NO], this.yesnoX + 2 + 40, this.g_iYesnoY + 2);
        }
    };
    WWA.prototype.graficLoading = function (g) {
        if(!this.g_bImageLoadStart) {
            this.g_bImageLoadStart = true;
            this.imgMap = new Image();
            this.imgMap.src = this.wwaData.mapcgName;
            this.imgMap.onload = function () {
                wwa.g_bImageLoadComplete = true;
                wwa.LoadingMessage(g, 3);
                console.log(wwa.wwaData.mapcgName + " Load Complete!");
            };
            this.imgMap.onerror = function () {
                wwa.g_imageNotFound = true;
                console.log(wwa.wwaData.mapcgName + " Not found!");
            };
        }
        if(this.g_bImageLoadComplete && !this.g_bImageClipStart) {
            this.g_bImageClipStart = true;
            var height = this.imgMap.height;
            var x, y;
            var n = 4;
            for(var i = 0; i < this.wwaData.g_iMapPartsMax; i++) {
                x = this.wwaData.mapAttribute[i][this.ATR_X] / 40;
                y = this.wwaData.mapAttribute[i][this.ATR_Y] / 40;
                if(y >= (height + 39) / 40) {
                    this.wwaData.mapAttribute[i][this.ATR_CROP1] = 0;
                } else {
                    n = y > n ? y : n;
                    this.wwaData.mapAttribute[i][this.ATR_CROP1] = (x + y * 10);
                }
            }
            for(var i = 0; i < this.wwaData.g_iObjectPartsMax; i++) {
                x = this.wwaData.objectAttribute[i][this.ATR_X] / 40;
                y = this.wwaData.objectAttribute[i][this.ATR_Y] / 40;
                if(y >= (height + 39) / 40) {
                    this.wwaData.objectAttribute[i][this.ATR_CROP1] = 0;
                } else {
                    n = y > n ? y : n;
                    this.wwaData.objectAttribute[i][this.ATR_CROP1] = (x + y * 10);
                }
                x = this.wwaData.objectAttribute[i][this.ATR_X2] / 40;
                y = this.wwaData.objectAttribute[i][this.ATR_Y2] / 40;
                if(y >= (height + 39) / 40) {
                    this.wwaData.objectAttribute[i][this.ATR_CROP2] = 0;
                } else {
                    n = y > n ? y : n;
                    this.wwaData.objectAttribute[i][this.ATR_CROP2] = (x + y * 10);
                }
            }
            if(height != -1) {
                this.wwaData.g_iCropMax = (Math.floor((height - 1) / 40) + 1) * 10;
            } else {
                this.wwaData.g_iCropMax = (n + 1) * 10;
            }
            var cpe = document.createElement("canvas");
            cpe.setAttribute("id", "clipping");
            cpe.setAttribute("width", "40");
            cpe.setAttribute("height", "40");
            this.canvasWrapper.appendChild(cpe);
            var cptx = cpe.getContext("2d");
            if(!this.USE_DEBUG_CANVAS) {
                cpe.style.display = "none";
            }
            this.wwaData.imgCrop = new Array(this.wwaData.g_iCropMax);
            this.g_iCropLoadNum = 0;
            for(this.cropID = 0; this.cropID < this.wwaData.g_iCropMax; this.cropID++) {
                cptx.clearRect(0, 0, 40, 40);
                cptx.drawImage(this.imgMap, this.cropID % 10 * 40, Math.floor(this.cropID / 10) * 40, 40, 40, 0, 0, 40, 40);
                this.wwaData.imgCrop[this.cropID] = new Image();
                this.wwaData.imgCrop[this.cropID].src = cpe.toDataURL();
                this.wwaData.imgCrop[this.cropID].onload = function () {
                    wwa.g_iCropLoadNum++;
                };
            }
            this.g_bImageClipComplete = true;
            this.LoadingMessage(g, 4);
            this.g_cropTimer = setInterval(function () {
                if(wwa.g_iCropLoadNum == wwa.wwaData.g_iCropMax) {
                    wwa.g_bLoadComplete = true;
                    clearInterval(wwa.g_cropTimer);
                }
            }, 100);
        }
    };
    WWA.prototype.LoadingMessage = function (g, mode) {
        g.fillStyle = "white";
        g.fillRect(0, 0, 560, 440);
        g.fillStyle = "black";
        g.font = "32px TimesRoman";
        g.fillText("Welcome to WWA.js!", 100, 70);
        g.font = "18px TimesRoman";
        g.fillText("(C)1996-2009  NAO (Original)", 160, 405);
        g.fillText("(C)2013  rmn. (JS Version)  Ver 4.00", 160, 430);
        g.font = "22px TimesRoman";
        if(mode >= 0) {
            g.fillText("Now Map data Loading .....", 50, 140);
        }
        if(mode >= 1) {
            g.fillText("Now Map data Loading ..... Complete!", 50, 140);
            g.fillText("Now CG data Loading .....", 50, 170);
        }
        if(mode >= 3) {
            g.fillText("Now CG data Loading ..... Complete!", 50, 170);
            g.fillText("Now Making chara CG .....", 50, 200);
        }
        if(mode >= 4) {
            g.fillText("Now Making chara CG ..... Complete!", 50, 200);
        }
        if(mode >= 1) {
            g.font = "18px TimesRoman";
            g.fillText("World Name:  " + this.wwaData.worldName, 160, 380);
        }
    };
    WWA.prototype.MessageCheck = function (g) {
    };
    WWA.prototype.twait = function (ms) {
        setTimeout(_dummy, ms);
    };
    WWA.prototype.paintMapAll = function (g, mode) {
        if(this.g_bFadeBlack) {
            this.g_bFadeBlack = false;
            g.strokeStyle = "gray";
            g.fillStyle = "gray";
            for(var k = 0; k < 220; k++) {
                g.strokeRect(k, k, 440 - k * 2, 440 - k * 2);
                if(k % 10 == 0) {
                    this.twait(20);
                }
            }
            this.twait(20);
            g.fillRect(0, 0, 440, 440);
            this.wwaData.mapFlagErase = true;
        }
        if(this.wwaData.mapFlagErase && mode) {
            this.wwaData.mapFlagErase = false;
            for(var j = 0; j < 11; j++) {
                for(var i = 0; i < 11; i++) {
                }
                this.twait(20);
            }
        }
        this.gBuff.fillStyle = "gray";
        this.gBuff.fillRect(0, 0, 440, 440);
        for(var j = 0; j < 11; j++) {
            for(var i = 0; i < 11; i++) {
                var m = this.wwaData.map[j + this.wwaData.mapY * 10][i + this.wwaData.mapX * 10];
                this.cropID = this.wwaData.mapAttribute[m][this.ATR_CROP1];
                this.gBuff.drawImage(this.wwaData.imgCrop[this.cropID], i * 40, j * 40);
                if(this.wwaData.charaX / 5 == i && this.wwaData.charaY / 5 == j && this.wwaData.charaY % 5 == 0 && this.wwaData.charaY % 5 == 0) {
                    this.gBuff.drawImage(this.wwaData.imgCrop[this.cropIDchara], i * 40, j * 40);
                }
                m = this.wwaData.mapObject[j + this.wwaData.mapY * 10][i + this.wwaData.mapX * 10];
                if(m != 0 && !this.CheckNoDrawParts(m, this.wwaData.charaX / 5, i, this.wwaData.charaY / 5, j)) {
                    if(this.countAnimation % 44 < 22 || this.wwaData.objectAttribute[m][2] == 0) {
                        this.cropID = this.wwaData.objectAttribute[m][this.ATR_CROP1];
                    } else {
                        this.cropID = this.wwaData.objectAttribute[m][this.ATR_CROP2];
                    }
                    this.countAnimation += 2;
                    this.gBuff.drawImage(this.wwaData.imgCrop[this.cropID], i * 40, j * 40);
                }
            }
        }
        for(var j = 0; j < 11; j++) {
            for(var i = 0; i < 11; i++) {
            }
        }
        if(mode) {
            g.drawImage(this.imgBuff, 0, 0);
        }
    };
    WWA.prototype.CheckNoDrawParts = function (objPartsID, x, xInWindowParts, y, yInWindowParts) {
        return (x == xInWindowParts && y == yInWindowParts && this.g_bDefault == 0 && ((this.wwaData.objectAttribute[objPartsID][this.ATR_NUMBER] == 0 && this.wwaData.objectAttribute[objPartsID][this.ATR_TYPE] == this.OBJECT_DOOR) || this.wwaData.objectAttribute[objPartsID][this.ATR_TYPE] == this.OBJECT_STATUS || this.wwaData.objectAttribute[objPartsID][this.ATR_TYPE] == this.OBJECT_MESSAGE || this.wwaData.objectAttribute[objPartsID][this.ATR_TYPE] == this.OBJECT_SELL || this.wwaData.objectAttribute[objPartsID][this.ATR_TYPE] == this.OBJECT_BUY || this.wwaData.objectAttribute[objPartsID][this.ATR_TYPE] == this.OBJECT_SELECT || this.wwaData.objectAttribute[objPartsID][this.ATR_TYPE] == this.OBJECT_LOCALGATE));
    };
    WWA.prototype.getLocalPosition = function (mx, my) {
        var cx, cy;
        var sx = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft;
        var sy = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        cx = mx - this.canvas.offsetLeft + sx;
        cy = my - this.canvas.offsetTop + sy;
        return {
            "x": cx,
            "y": cy
        };
    };
    return WWA;
})();
var _dummy = function () {
};
var wwa;
window.onload = function () {
    wwa = new WWA("wwa");
};
function wran(t) {
    wwa.run(t);
}
