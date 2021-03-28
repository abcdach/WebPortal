



WebMSG="";

function debug_CLS(message) {
	WebMSG="";
	if(dbg)Tea0.PutValue("");
}

function debug(message) {
	WebMSG += message + "\n";
	if(dbg)Tea0.PutValue(WebMSG);
}

function sendMessage(data) {
	var msg = data;
	if ( websocket_status === 1 )
	{
		websocket.send( msg );
	}
	//else
	//{
		//checkSocket();
	//}
}

var wsUri = ""; 
var websocket = null;

function initWebSocket() {
	WEBSOCK_OFF();
	Server_START.Disable();
	Server_STOP.Enable()
	Server_IP.Disable();
	
	try {
		if (typeof MozWebSocket == 'function') WebSocket = MozWebSocket;
		if ( websocket && websocket.readyState == 1 ) websocket.close();
		websocket = new WebSocket( "ws://" + Server_IP.GetValue() + ":4003" );
		P02_0A.show(0);P02_1A.show(1);P02_2A.show(0);
		websocket.onopen = function (evt)
		{
			debug("CONNECTED");
			websocket_status = 1;
			Server_Stat.PutValue("");
		};
		websocket.onclose = function (evt)
		{
			debug("DISCONNECTED");
			WEBSOCK_OFF();
		};
		websocket.onmessage = function (evt) {
			//#########################################################
			debug( evt.data );
			//#########################################################
			var JSON_VALUE;
			var JSON_PARSE = JSON.parse(evt.data);
			var COM_VALUE = JSON_PARSE.com;
			if (typeof COM_VALUE === "undefined") return 1;

			switch (COM_VALUE) {
				case "0": 
				{

					break;
				}
				case "1": 
				{
				//#--------------------------------------------------------------
					JSON_VALUE = JSON_PARSE.x;
					if (typeof JSON_VALUE === "undefined") return 1;
					isD = Number(JSON_VALUE);
				//#--------------------------------------------------------------
					if(isD === 1){
						debug("Devce Connected");
						P04_0.show(0);P04_1.show(1);
						P05_0.show(0);P05_1.show(1);
						DEV_PROG_UPLOAD.Enable();
						ESP_INFO_RUN.Enable();
					}
					if(isD === 0){
						debug("Devce DisConnected");
						USB_OFF();
					}
				//#-------------------------------------------------------------- 
					break;
				}				
				case "2": 
				{
					debug( evt.data );
				//#--------------------------------------------------------------
					JSON_VALUE = JSON_PARSE.x;
					if (typeof JSON_VALUE === "undefined") return 1;
					isX = Number(JSON_VALUE);
				//#--------------------------------------------------------------			
					JSON_VALUE = JSON_PARSE.y;
					if (typeof JSON_VALUE === "undefined") return 1;
					isY = JSON_VALUE;
				//#--------------------------------------------------------------
					JSON_VALUE = JSON_PARSE.z;
					if (typeof JSON_VALUE === "undefined") return 1;
					isZ = JSON_VALUE;
				//#--------------------------------------------------------------
					Conf_Name[isX-1].PutValue(isY);
					Conf_Valu[isX-1].PutValue(isZ);
					Conf_Text[isX-1]=isZ;
				//#--------------------------------------------------------------
					Device_Mode.PutValue("Config Mode");
					Device_Mode.background('#DAF7A6');
					CONF_SAVE.Enable();
					for( var i = 0; i < 9; i++ ) Conf_Valu[i].Enable();
					isConfig_Mode = 1;
					Wifi_Status.PutValue("");
					Mqtt_Status.PutValue("");
					Mqtt_Publish.PutValue("");
					
			
				//#--------------------------------------------------------------
					break;
				}				
				case "3": 
				{
				//#--------------------------------------------------------------
					JSON_VALUE = JSON_PARSE.x;
					if (typeof JSON_VALUE === "undefined") return 1;
				//#--------------------------------------------------------------
					Device_info.PutValue(JSON_VALUE);
					DEV_RESSET();					
				//#--------------------------------------------------------------
					break;
				}
				case "4": 
				{
				//#--------------------------------------------------------------
					JSON_VALUE = JSON_PARSE.x;
					if (typeof JSON_VALUE === "undefined") return 1;
				//#--------------------------------------------------------------			
					DATA_OUT.PutValue(JSON_VALUE);
					//DATA_OUT.background('#DAF7A6');
				//#--------------------------------------------------------------
					break;
				}	
				case "5": 
				{
				//#--------------------------------------------------------------
					JSON_VALUE = JSON_PARSE.x;
					if (typeof JSON_VALUE === "undefined") return 1;
				//#--------------------------------------------------------------			
					Device_Mode.PutValue("Non Config Mode !!!");
					Device_Mode.background('#ffe0b3');
					//TimeOUT = 0;
					CONF_SAVE.Disable();
					for( var i = 0; i < 9; i++ ) Conf_Valu[i].Disable();
					isConfig_Mode = 0;					
				//#--------------------------------------------------------------
					break;
				}				
				case "10"://MQTT_START 
				{
					Mqtt_Status.PutValue("Connecting");
					//Mqtt_Status.background('#ffe0b3');
					P02_0C.show(0);P02_1C.show(1);P02_2C.show(0);
					break;
				}
				case "11"://MQTT_OK //"Connected"
				{
					Mqtt_Status.PutValue("");
					//Mqtt_Status.background('#DAF7A6');
					P02_0C.show(0);P02_1C.show(0);P02_2C.show(1);
					P07_0.show(0);P07_1.show(1);
					break;
				}
				case "12"://MQTT_ERROR 
				{
					Mqtt_Status.PutValue("ERROR");
					break;
				}
				case "13"://MQTT_PUBLISH 
				{
					//Mqtt_Publish.PutValue("Message Published");
					DATA_OUT.show(1);
					DATA_IN.show(1);
					P8_00.show(0);P8_01.show(1);P8_02.show(0);P8_03.show(0);
					break;
				}
				case "14"://MQTT_EXIT 
				{
					break;
				}
				case "20":// WIFI_START 
				{
					Wifi_Status.PutValue("Connecting");
					DEV_RESSET();
					P02_0B.show(0);P02_1B.show(1);P02_2B.show(0);
					break;
				}
				case "21"://WIFI_OK  //Connected
				{
					Wifi_Status.PutValue("");
					P02_0B.show(0);P02_1B.show(0);P02_2B.show(1);
					P06_0.show(0);P06_1.show(1);
					break;
				}
				case "22"://WIFI_ERROR 
				{
					Wifi_Status.PutValue("ERROR");
					break;
				}
				case "23"://WIFI_EXIT 
				{
					break;
				}

				case "30"://GET ESP INFO 
				{
				//#--------------------------------------------------------------
					JSON_VALUE = JSON_PARSE.x;
					if (typeof JSON_VALUE === "undefined") return 1;
				//#--------------------------------------------------------------
					JSON_VALUE = Base64.decode(JSON_VALUE);				
					ESP_INFO.PutValue(JSON_VALUE);
					PPW.show(0);
					ESP_INFO_RUN.Enable();
				//#--------------------------------------------------------------
					break;
				}
				case "40"://UPLOAD BIT
				{
				//#--------------------------------------------------------------
					JSON_VALUE = JSON_PARSE.x;
					if (typeof JSON_VALUE === "undefined") return 1;
				//#--------------------------------------------------------------
					JSON_VALUE = Base64.decode(JSON_VALUE);				
					DEV_PROG_TA.PutValue(JSON_VALUE);
					PPW.show(0);
					DEV_PROG_UPLOAD.Enable();
				//#--------------------------------------------------------------
					break;
				}

				default: 
				{
					break;
				}
			}




			
		};
		websocket.onerror = function (evt) {
			debug('ERROR: ' + evt.data);
		};
	} catch (exception) {
		debug('ERROR: ' + exception);
	}
}

function stopWebSocket(){
	if (websocket)websocket.close();
	WEBSOCK_OFF();
}


var websocket_status = 0;
function checkSocket() {
	if (websocket != null) {
		var stateStr;
		switch (websocket.readyState) {
			case 0: { debug("Connecting");
				WEBSOCK_OFF();
				Server_Stat.PutValue("Connecting");
				P02_0A.show(0);P02_1A.show(1);P02_2A.show(0);
				break;
			}
			case 1: {debug("OPEN");

				Server_Stat.PutValue("");
				websocket_status = 1;
				
				P02_0A.show(0);P02_1A.show(0);P02_2A.show(1);
				P01_0.show(0);P01_1.show(1);
				P03_0.show(0);P03_1.show(1)
				
				break;
			}
			case 2: {debug("CLOSING");
				WEBSOCK_OFF();
				break;
			}
			case 3: {debug("CLOSED");
				WEBSOCK_OFF();
				break;
			}
			default: {
				WEBSOCK_OFF();
				break;
			}
		}//debug("WebSocket state = " + websocket.readyState + " ( " + stateStr + " )");
	} else WEBSOCK_OFF();
	
	
	
}


function WEBSOCK_OFF(){
	
	

	
	
	debug("WEBSOCK_OFF SYS_CLEAN_UP");
	
	Server_IP.Enable();
	

	Server_START.Enable();
	Server_STOP.Disable();

	websocket_status = 0;
	
	Server_Stat.PutValue("");
	Server_Stat.background('#ffffff');
	
	P01_0.show(1);P01_1.show(0);
	P02_0A.show(1);P02_1A.show(0);P02_2A.show(0);
	P03_0.show(1);P03_1.show(0);
	
	USB_OFF();

	Conf_Wait = 0;
	Conf_Cou  = 0;
	Conf_Save = 0;

	isConfig_Mode = 0;	
}


function USB_OFF(){
		PPW.show(0);
		DEV_PROG_UPLOAD.Disable();
		ESP_INFO_RUN.Disable();
	
		DATA_OUT.PutValue("");	
		Device_info.PutValue("");
		Wifi_Status.PutValue("");
		Mqtt_Status.PutValue("");

		//Wifi_Status.background('#ffffff');
		//Mqtt_Status.background('#ffffff');	
		//Device_info.background('#ffffff');

		P04_0.show(1);P04_1.show(0);
		P05_0.show(1);P05_1.show(0);
		P02_0B.show(1);P02_1B.show(0);P02_2B.show(0);
		P02_0C.show(1);P02_1C.show(0);P02_2C.show(0);
		P06_0.show(1);P06_1.show(0);
		P07_0.show(1);P07_1.show(0);
		
		P8_00.show(1);P8_01.show(0);P8_02.show(0);P8_03.show(0);
		DATA_OUT.show(0);
		DATA_IN.show(0);
		
		CONFIG_OFF();	
}

function DEV_RESSET(){
	P02_0B.show(1);P02_1B.show(0);P02_2B.show(0);
	P06_0.show(1);P06_1.show(0);
	P02_0C.show(1);P02_1C.show(0);P02_2C.show(0);
	P07_0.show(1);P07_1.show(0);
	DATA_OUT.show(0);
	DATA_IN.show(0);
	P8_00.show(1);P8_01.show(0);P8_02.show(0);P8_03.show(0);
}

function CONFIG_OFF(){
	
	Device_Mode.PutValue("");
	Device_Mode.background('#ffffff');					
					
	for( var f = 0; f < 9; f++ )
	{
		Conf_Valu[f].background('#ffffff');
		Conf_Valu[f].PutValue("");
		Conf_Name[f].PutValue("");
		Conf_Text[f]="";
	}
	
	CONF_SAVE.Disable();
}






