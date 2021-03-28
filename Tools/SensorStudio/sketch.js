




var dbg = 0;

function setup() {
	//createCanvas(100, 100); background(155); cursor(ARROW); ellipseMode(CORNER);rectMode(CORNER);
    //frameRate(1);
	//############################################################################
	//#
	//#
	//############################################################################
	
	GUI_X = 40;
	GUI_Y = 50;G1=-2;

	P09_0 	  = new is_createImg('pic/09_0.jpg',GUI_X-10,GUI_Y +95 ,'375px','105px',isNull,1);
	
	DEV_CLR   = new is_createButton('CLR',GUI_X,GUI_Y+200, '45px', '22px', isCLR,0 ); GUI_X += 48;
	DEV_INFO  = new is_createButton('ESP INFO',GUI_X,GUI_Y+200, '80px', '22px', DEV_INFO_CLICK,1 );GUI_X += 83;
	DEV_PROG  = new is_createButton('PROG',GUI_X,GUI_Y+200, '80px', '22px', DEV_PROG_CLICK,1 ); GUI_X += 83;
	DEV_CONF  = new is_createButton('CONFIG',GUI_X,GUI_Y+200, '80px', '22px', DEV_CONF_CLICK,1 ); 
		
	GUI_X = 40;	
	Device_inf  = new is_createInput2 ('Board Info :',GUI_X,GUI_Y+176, '80px','LEFT','#DAF7A6','none','13px','Arial','#ffffff','bold','italic',1);	
	//Device_inf.background('#D0D0D0');
	Device_info   = new is_createInput2 ('',GUI_X+80,GUI_Y+176, '210px','LEFT','#DAF7A6','none','13px','Arial','#ffffff','bold','italic',1);	
	//Device_info.background('#D0D0D0');
	//############################################################################
	//#
	//#
	//############################################################################
	
	GUI_X = 40;

	P01_0 		  = new is_createImg('pic/01_0.jpg',GUI_X,GUI_Y,'90px','90px',isNull,1);
	P01_1 		  = new is_createImg('pic/01_1.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);
	Server_START  = new is_createButton('START',GUI_X,GUI_Y+100, '90px', '22px', initWebSocket,1 ); 	
	Server_STOP   = new is_createButton('STOP', GUI_X,GUI_Y+100+25, '90px', '22px', stopWebSocket,0);
	GUI_X+=90-G1;

	P02_0A 		  = new is_createImg('pic/02_0A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,1);
	P02_1A 		  = new is_createImg('pic/02_1A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);
	P02_2A 		  = new is_createImg('pic/02_2A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);
	Server_Stat	  = new is_createInput2 ('',GUI_X,GUI_Y+95, '90px','CENTER','#DAF7A6','none','12px','Arial','#ffffff','bold','italic',0);
	GUI_X+=90-G1;
	
	
	P03_0 		  = new is_createImg('pic/03_0.jpg',GUI_X,GUI_Y,'90px','90px',isNull,1);
	P03_1 		  = new is_createImg('pic/03_1.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);
	Server_IP	  = new is_createInput2 ('isMAXIOTH6',GUI_X-2-10,GUI_Y+95, '110px','CENTER','#DAF7A6','ridge','12px','Arial','#ffffff','bold','italic',1);	
	
	GUI_X+=90-G1;
	
	P04_0 		  = new is_createImg('pic/04_0A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,1);
	P04_1 		  = new is_createImg('pic/04_1A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);
	GUI_X+=90-G1;


	P05_0 		  = new is_createImg('pic/05_0.jpg',GUI_X,GUI_Y,'90px','90px',isNull,1);
	P05_1 		  = new is_createImg('pic/05_1.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);
	GUI_X+=90-G1;
	
	P02_0B 		  = new is_createImg('pic/02_0A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,1);
	P02_1B 		  = new is_createImg('pic/02_1A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);
	P02_2B 		  = new is_createImg('pic/02_2A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);	
	Wifi_Status   = new is_createInput2 ('',GUI_X,GUI_Y+78, '90px','CENTER','#DAF7A6','none','8px','Arial','#ffffff','bold','',0);
	Wifi_Status.background('#D0D0D0');	
	GUI_X+=90-G1;

	P06_0 		  = new is_createImg('pic/06_0A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,1);
	P06_1 		  = new is_createImg('pic/06_1A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);
	GUI_X+=90-G1;
	
	P02_0C 		  = new is_createImg('pic/02_0A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,1);
	P02_1C 		  = new is_createImg('pic/02_1A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);
	P02_2C 		  = new is_createImg('pic/02_2A.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);		
	Mqtt_Status   = new is_createInput2 ('',GUI_X,GUI_Y+78, '90px','CENTER','#FFFFFF','none','8px','Arial','#ffffff','bold','',0);
	Mqtt_Status.background('#D0D0D0');
	GUI_X+=90-G1;
		
		
	P07_0 		  = new is_createImg('pic/07_0.jpg',GUI_X,GUI_Y,'90px','90px',isNull,1);
	P07_1 		  = new is_createImg('pic/07_1.jpg',GUI_X,GUI_Y,'90px','90px',isNull,0);GUI_X+=90-G1;	
	
	//############################################################################
	//#
	//#
	//############################################################################
	
	GUI_X = 40;

	Txt1		  = new is_createP     ('PC',GUI_X,GUI_Y+70, '7pt','Arial','100','bold','italic');GUI_X+=90-G1;
	Txt2		  = new is_createP     ('',GUI_X,GUI_Y+70, '7pt','Arial','100','bold','italic');GUI_X+=90-G1;
	Txt3		  = new is_createP     ('System Board',GUI_X,GUI_Y+70, '7pt','Arial','100','bold','italic');GUI_X+=90-G1;
	Txt4		  = new is_createP     ('USB Connection',GUI_X,GUI_Y+70, '7pt','Arial','100','bold','italic');GUI_X+=90-G1;
	Txt5		  = new is_createP     ('Sensor Board',GUI_X,GUI_Y+70, '7pt','Arial','100','bold','italic');GUI_X+=90-G1;
	Txt6		  = new is_createP     ('',GUI_X,GUI_Y+70, '7pt','Arial','100','bold','italic');GUI_X+=90-G1;
	Txt7		  = new is_createP     ('WiFi Router',GUI_X,GUI_Y+70, '7pt','Arial','100','bold','italic');GUI_X+=90-G1;
	Txt8		  = new is_createP     ('',GUI_X,GUI_Y+70, '7pt','Arial','100','bold','italic');GUI_X+=90-G1;	
	Txt9		  = new is_createP     ('IOT Server',GUI_X,GUI_Y+70, '7pt','Arial','100','bold','italic');GUI_X+=90-G1;

	
	//############################################################################
	//#
	//#
	//############################################################################	
	
	
	GUI_X = 40;	
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	GUI_X+=90-G1;

	P8_00 	   = new is_createImg('pic/08_0.jpg',GUI_X-20,GUI_Y-47,'385px','45px',isNull,1);
	P8_01 	   = new is_createImg('pic/08_1.jpg',GUI_X-20,GUI_Y-47,'385px','45px',isNull,0);
	P8_02 	   = new is_createImg('pic/08_1.jpg',GUI_X-20,GUI_Y-47,'385px','45px',isNull,0);
	P8_03 	   = new is_createImg('pic/08_1.jpg',GUI_X-20,GUI_Y-47,'385px','45px',isNull,0);
	DATA_IN    = new is_createInput2 ('',GUI_X+35,GUI_Y-50, '230px','CENTER','#DAF7A6','none','12px','Arial','#ffffff','bold','italic',0);	
	DATA_OUT   = new is_createInput2 ('',GUI_X+35,GUI_Y-24, '230px','CENTER','#DAF7A6','none','12px','Arial','#ffffff','bold','italic',0);	
	DATA_OUT.show(0);//DATA_OUT.background('#D0D0D0');
	DATA_IN.show(0);//DATA_IN.background('#D0D0D0');
	
	//############################################################################
	//#DEV_CONF
	//#
	//############################################################################	

	GUI_X = 40;	
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	GUI_X+=90-G1;

	
	Conf_Name = [];
	Conf_Valu = [];
	Conf_Text = [];
	
	
	P00_1 	      = new is_createImg('pic/00_1.jpg',GUI_X,GUI_Y+95,'457px','300px',isNull,1);	
	Lock_Config   = new is_createCheckbox("Lock - Config Mode :",GUI_X-2 ,GUI_Y+6+95,'9pt','Arial','100','bold','italic',isLock_Config,0,1);
	Device_Mode   = new is_createInput   ('',GUI_X,GUI_Y+120, '205pt','CENTER','#DAF7A6','ridge',0);
	var Y_Y = GUI_Y+25;
	for( var i = 0; i < 9; i++ ){		
		Conf_Name[i] = new is_createInput2('',GUI_X,Y_Y+120, '100pt','LEFT','#DAF7A6','ridge','14px','Arial','#ffffff','','',1);
		Conf_Valu[i] = new is_createInput2('',GUI_X+140,Y_Y+120, '100pt','LEFT','#DAF7A6','ridge','14px','Arial','#ffffff','','',1);Y_Y += 25;
		Conf_Text[i] = "";
		Conf_Name[i].Disable();Conf_Valu[i].Disable();			
		
	} 
	CONF_SAVE 	  = new is_createButton  ('SAVE',GUI_X,Y_Y+120, '51pt', '16pt', CONFIG_SAVE, 0 );//GUI_Y += 20;
	
	DEV_CONF_SHOW(0);
	//DEV_CONF_STATUS = 0;
	
	
	//############################################################################
	//#DEV_PROG
	//#
	//############################################################################		
	GUI_X = 40;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	
	DEV_PROG_TXT    = new is_createP       ('Esp Module Info :',GUI_X,GUI_Y+94, '9pt','Arial','100','bold','italic');
	DEV_PROG_FILE   = new is_createFileInput(GUI_X,GUI_Y+120,'278px','22px',ishandleFile);
	DEV_PROG_TA 	= new is_createTextarea('',GUI_X+0,GUI_Y+146,'271px','215px',1);
	DEV_PROG_UPLOAD = new is_createButton  ('UPLOAD',GUI_X+0,Y_Y+120, '51pt', '16pt', isDEV_PROG_UPLOAD, 0);

	DEV_PROG_SHOW(0);
	//############################################################################
	//#DEV_INFO
	//#
	//############################################################################	
	GUI_X = 40;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	
	ESP_INFO_TXT   = new is_createP       ('Esp Module Info :',GUI_X,GUI_Y+94, '9pt','Arial','100','bold','italic');
	ESP_INFO 	   = new is_createTextarea('',GUI_X+0,GUI_Y+120,'271px','241px',1);
	ESP_INFO_RUN   = new is_createButton  ('RUN',GUI_X+0,Y_Y+120, '51pt', '16pt', DEV_INFO_RUN, 0 );//GUI_Y += 20;
	
	DEV_INFO_SHOW(0);
	//DEV_INFO_STATUS = 0;


	//############################################################################
	//#
	//#
	//############################################################################	
	GUI_X = 40;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	GUI_X+=90-G1;
	PPW		  = new is_createP     ('Processing, Please Wait !!!',GUI_X+30,GUI_Y+210, '12pt','Arial','#ff4d4d','bold','italic');
	PPW.show(0);

	//#########################################################################	
	
	if(dbg)
	{
		But0 		  = new is_createButton('CLS',740,10+200, '50pt', '16pt', debug_CLS, 1);
	    Tea0 		  = new is_createTextarea('',740,40+200,'400px','400px',1);
	}	
	//#########################################################################		

}




function isCLR(){
	DEV_INFO_SHOW(0);
	DEV_PROG_SHOW(0);
	DEV_CONF_SHOW(0);
	
	DEV_INFO.Enable();//Disable
	DEV_PROG.Enable();//Disable
	DEV_CONF.Enable();//Disable
	
	DEV_CLR.Disable();//Disable
}



//############################################################################
//# DEV_CONF
//#
//############################################################################
function DEV_CONF_CLICK(){
	DEV_INFO_SHOW(0);DEV_INFO.Enable();//Disable
	DEV_PROG_SHOW(0);DEV_PROG.Enable();//Disable
	DEV_CONF_SHOW(0);DEV_CONF.Disable();//Disable
	DEV_CLR.Enable();//Disable
	DEV_CONF_SHOW(1);
}
function DEV_CONF_SHOW(Data){
	P00_1.show(Data);
	Lock_Config.show(Data);
	Device_Mode.show(Data);
	CONF_SAVE.show(Data);
	for( var i = 0; i < 9; i++ ){		
		Conf_Name[i].show(Data);
		Conf_Valu[i].show(Data);

	}				
}
//############################################################################
//#DEV_PROG
//#
//############################################################################
//var DEV_PROG_STATUS = 0;
function DEV_PROG_CLICK(Data){
	DEV_INFO_SHOW(0);DEV_INFO.Enable();//Disable
	DEV_PROG_SHOW(0);DEV_PROG.Disable();//Disable
	DEV_CONF_SHOW(0);DEV_CONF.Enable();//Disable
	DEV_CLR.Enable();//Disable
	DEV_PROG_SHOW(1);
}
function DEV_PROG_SHOW(Data){ 
	DEV_PROG_TXT.show(Data);
	DEV_PROG_FILE.show(Data);
	DEV_PROG_TA.show(Data);
	DEV_PROG_UPLOAD.show(Data);
}
function isDEV_PROG_UPLOAD(Data){
	if (websocket_status === 1){
		DEV_PROG_UPLOAD.Disable();
		msg = '{\"com\":\"6\",\"x\":\"'+fn+'\",\"y\":\"'+fd+'\"}';
		websocket.send(msg);
		PPW.show(1);
		DEV_PROG_TA.PutValue(fTxT);		
	}
}

var fn = "";
var fd = "";
var fTxT;
function ishandleFile(file) {
	//file = _main.default.File {file: File, _pInst: undefined, type: "text", subtype: "plain", name: "111.txt", …}
	//file = _main.default.File {file: File, _pInst: undefined, type: "application", subtype: "octet-stream", name: "x25.bin", …}

	var ft = file.type;
	var fs = file.subtype;
	fn = file.name;
	fd = file.data;

	if(ft==="text"){
		fd = 'base64,' + Base64.encode(fd);
	}

	fTxT = "file name : " + file.name + "\n";
	DEV_PROG_TA.PutValue(fTxT);
	//msg = '{\"com\":\"6\",\"x\":\"'+fn+'\",\"y\":\"'+fd+'\"}';
	//websocket.send(msg);

}


//############################################################################
//#DEV_INFO
//#
//############################################################################
function DEV_INFO_CLICK(Data){
	DEV_INFO_SHOW(0);DEV_INFO.Disable();//Disable
	DEV_PROG_SHOW(0);DEV_PROG.Enable();//Disable
	DEV_CONF_SHOW(0);DEV_CONF.Enable();//Disable
	DEV_CLR.Enable();//Disable
	DEV_INFO_SHOW(1);	
}
function DEV_INFO_SHOW(Data){
	ESP_INFO.show(Data);
	ESP_INFO_RUN.show(Data);
	ESP_INFO_TXT.show(Data);	
}
function DEV_INFO_RUN(Data){
	if (websocket_status === 1){
			msg = '{\"com\":\"5\"}';
			websocket.send(msg);
			PPW.show(1);
			ESP_INFO_RUN.Disable();
			ESP_INFO.PutValue("");
	}	
}
//############################################################################
//#
//#
//############################################################################	





function isLock_Config() {
	if ( websocket != null ){
		msg = '{\"com\":\"1\"}'
		websocket.send(msg);
	}
}


var Conf_Wait = 0;
var Conf_Cou  = 0;
var Conf_Save = 0;
function CONFIG_SAVE(){Conf_Save = 1;}


var isConfig_Mode = 0;
var Lock_Config_Cou = 0;
function draw() {
	if (websocket_status === 1)
	{

			msg = '{\"com\":\"1\"}';
			websocket.send(msg);
				
			if(Lock_Config.GetValue()){
				if(isConfig_Mode === 1){
					if(Lock_Config_Cou === 0){
						Lock_Config_Cou = 5;		
						msg = '{\"com\":\"2\"}'
						websocket.send(msg);//debug(msg);
					} else Lock_Config_Cou --;
				}else Lock_Config_Cou = 0;
			}else Lock_Config_Cou = 0;




			Conf_Cou  = 0
			for( var f = 0; f < 9; f++ )
			{
				if(Conf_Text[f] === Conf_Valu[f].GetValue())
				{
					Conf_Valu[f].background('#ffffff');
				}
				else
				{
					Conf_Valu[f].background('#ffe6e6'); Conf_Cou ++;
				}			
			}	
			if(Conf_Cou === 0){Conf_Save = 0;Conf_Wait = 0;}

			if(Conf_Save === 1){
				if(Conf_Wait === 0){
					for( var f = 0; f < 9; f++ )
					{
						if(Conf_Text[f] !== Conf_Valu[f].GetValue())
						{
							var ismsg = '{\"com\":\"4\",\"x\":\"'+(f+1)+'\",\"y\":\"'+Conf_Name[f].GetValue()+'\",\"z\":\"'+Conf_Valu[f].GetValue() + '\"}';
							debug(ismsg);
							sendMessage(ismsg);
							Conf_Wait = 1;// daicade sanam ar mova pasuxi serveridan rom saqme gakeda rom sjhemdegi porcia sheidleba gagavnos
							break;
						}			
					}
				}		
			}
			
			
		checkSocket();
	}
		
		
		
	
 
}




function mouseMoved() {
}
function mousePressed() {
}
function mouseReleased() {
}
function mouseDragged() {
}

