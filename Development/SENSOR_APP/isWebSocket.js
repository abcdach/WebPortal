



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






