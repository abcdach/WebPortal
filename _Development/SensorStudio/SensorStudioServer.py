document.write(`
from SimpleWebSocketServer import SimpleWebSocketServer, WebSocket
import subprocess
import threading
import time
import json
import base64

WebSocket_Status = 0
Config_Ready = 0
Info_Ready = 0
Sensor_Ready = 0
ConfiEnd_Ready = 0
WIFI_OK = 0
MQTT_OK = 0
WIFI_START = 0
MQTT_START = 0
Serial_Connected = 0 #CONNECTED
Serial_Save_Status = 0
Serial_Save_Data = ""
Serial_send_BACKSPACE = 0
WIFI_ERROR = 0
MQTT_ERROR = 0
MQTT_PUBLISH = 0
MQTT_EXIT = 0
WIFI_EXIT = 0

STOP_SERIAL = 0
is_ttyUSB_Status = 0
is_ttyUSB_Name   = ""


CONF_I = ["" for x in range(15)]
CONF_N = ["" for x in range(15)]
CONF_P = ["" for x in range(15)]
INFO_TXT = ""
SENSOR_TXT = ""

def isStatus(data):		
	WebSocket_Status = data

class SimpleEcho(WebSocket):
	#def __init__(self):
	#self.isStatus = 0

    def handleMessage(self):
      global Serial_Save_Status
      global Serial_Save_Data
      global Serial_Connected
      global Config_Ready
      global Info_Ready
      global Sensor_Ready
      global ConfiEnd_Ready
      global CONF_I
      global CONF_N
      global CONF_P
      global INFO_TXT
      global SENSOR_TXT
      global Serial_send_BACKSPACE
      global MQTT_START
      global MQTT_OK
      global MQTT_ERROR
      global MQTT_PUBLISH
      global MQTT_EXIT
      global WIFI_OK      
      global WIFI_START      
      global WIFI_ERROR
      global WIFI_EXIT
      global STOP_SERIAL
      global is_ttyUSB_Status
      global is_ttyUSB_Name
      #self.sendMessage(self.data)
      isJson = json.loads(self.data)
      isComm = isJson["com"]
      ###############################################################
      if(isComm == "1"):# miertebis statusi
        msg = '{\"com\":\"1\",\"x\":\"' + str(is_ttyUSB_Status) + '\"}'
        self.sendMessage(msg)
        #-------------------------------------
        if(Config_Ready == 1):
          for x in range(1,10):           
            if(CONF_I[x]!=""):
              msg = '{\"com\":\"2\",\"x\":\"'+CONF_I[x]+'\",\"y\":\"'+CONF_N[x]+'\",\"z\":\"'+CONF_P[x] + '\"}'
              self.sendMessage(msg)
          Config_Ready = 0
        #-------------------------------------
        if(Info_Ready == 1):
          msg = '{\"com\":\"3\",\"x\":\"' + INFO_TXT + '\"}'
          self.sendMessage(msg)
          Info_Ready = 0
        #-------------------------------------
        if(Sensor_Ready == 1):
          msg = '{\"com\":\"4\",\"x\":\"' + SENSOR_TXT + '\"}'
          self.sendMessage(msg)
          Sensor_Ready = 0
        #-------------------------------------
        if(ConfiEnd_Ready == 1):
          msg = '{\"com\":\"5\",\"x\":\"' + '1' + '\"}'
          self.sendMessage(msg)
          ConfiEnd_Ready = 0
        #-------------------------------------
        # MQTT
        #-------------------------------------
        if(MQTT_START == 1):
          msg = '{\"com\":\"10\",\"x\":\"' + '1' + '\"}'
          self.sendMessage(msg)
          MQTT_START = 0
        #-------------------------------------
        elif(MQTT_OK == 1):
          msg = '{\"com\":\"11\",\"x\":\"' + '1' + '\"}'
          self.sendMessage(msg)
          MQTT_OK = 0
        #-------------------------------------
        elif(MQTT_ERROR == 1):
          msg = '{\"com\":\"12\",\"x\":\"' + '1' + '\"}'
          self.sendMessage(msg)
          MQTT_ERROR = 0
        #-------------------------------------
        elif(MQTT_PUBLISH == 1):
          msg = '{\"com\":\"13\",\"x\":\"' + '1' + '\"}'
          self.sendMessage(msg)
          MQTT_PUBLISH = 0
        #-------------------------------------
        elif(MQTT_EXIT == 1):
          msg = '{\"com\":\"14\",\"x\":\"' + '1' + '\"}'
          self.sendMessage(msg)
          MQTT_EXIT = 0
        #-------------------------------------
        # WIFI
        #-------------------------------------
        if(WIFI_START == 1):
          msg = '{\"com\":\"20\",\"x\":\"' + '1' + '\"}'
          self.sendMessage(msg)
          WIFI_START = 0
        #-------------------------------------
        elif(WIFI_OK == 1):
          msg = '{\"com\":\"21\",\"x\":\"' + '1' + '\"}'
          self.sendMessage(msg)
          WIFI_OK = 0
        #-------------------------------------
        elif(WIFI_ERROR == 1):
          msg = '{\"com\":\"22\",\"x\":\"' + '1' + '\"}'
          self.sendMessage(msg)
          WIFI_ERROR = 0
        #-------------------------------------
        elif(WIFI_EXIT == 1):
          msg = '{\"com\":\"23\",\"x\":\"' + '1' + '\"}'
          self.sendMessage(msg)
          WIFI_EXIT = 0
        #-------------------------------------
      ###############################################################
      if(isComm == "2"):# axali monacemis chawera
        print("TimeOUT=60")
        Serial_send_BACKSPACE = 1;
      ###############################################################
      if(isComm == "3"):# axali monacemis chawera
        print("TimeOUT=0")  
      ###############################################################
      if(isComm == "4"):# axali monacemis chawera
        isData = isJson["x"] + "_" + isJson["z"] + "\n"
        print(isData)
        Serial_Save_Status = 1
        Serial_Save_Data = isData        
      ###############################################################
      if(isComm == "5"):# GET ESP INFO
        #-------------------------------------
        STOP_SERIAL = 1
        time.sleep(3)
        #-------------------------------------
        cmd = "esptool.py  --after hard_reset --port "+ is_ttyUSB_Name +" chip_id"
        print  (">> cmd: "+cmd)
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
        (output, err) = p.communicate()
        p_status = p.wait()
        #isOUT = str(output)
        #print  (">> fff"+isOUT)
        #print  (">> "+str(p_status))
        #-------------------------------------
        message = str(output)
        message_bytes = message.encode('ascii')
        base64_bytes = base64.b64encode(message_bytes)
        base64_message = base64_bytes.decode('ascii')
        print  (">> "+base64_message)
        #-------------------------------------
        msg = '{\"com\":\"30\",\"x\":\"' + base64_message + '\"}'
        self.sendMessage(msg)
        #-------------------------------------
        STOP_SERIAL = 0
      ###############################################################
      if(isComm == "6"):
        print("isComm == 6")
        #-------------------------------------       
        STOP_SERIAL = 1
        #-------------------------------------
        xData = isJson["x"]
        yData = isJson["y"]
        print(yData[0:50])
        #print(xData)
        #print(yData)
        isBase = yData.find('base64,')+7
        isLen  = len(yData)
        print(isBase)
        print(isLen)
        yData = yData[isBase:isLen]
        print(yData[0:20])
        res = base64.b64decode(yData)
        #message = message_bytes.decode('ascii')
        #print(message)
        #-------------------------------------
        f = open("/tmp/"+xData, "w")
        f.write(res)
        f.close()
        #-------------------------------------
        time.sleep(3)

        if(is_ttyUSB_Status==0):
          print ("USB Error !!!")
        else:
          cmd = "esptool.py --port "  + is_ttyUSB_Name + " write_flash 0x000000 " + "/tmp/"+xData
          print (cmd)
          
          #cmd = "esptool.py  --after hard_reset --port "+ is_ttyUSB_Name +" chip_id"
          print  (">> cmd: "+cmd)
          p = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
          (output, err) = p.communicate()
          p_status = p.wait()
          #isOUT = str(output)
          #print  (">> fff"+isOUT)
          #print  (">> "+str(p_status))
          #-------------------------------------
          message = str(output)
          message_bytes = message.encode('ascii')
          base64_bytes = base64.b64encode(message_bytes)
          base64_message = base64_bytes.decode('ascii')
          print  (">> "+base64_message)
          #-------------------------------------
          msg = '{\"com\":\"40\",\"x\":\"' + base64_message + '\"}'
          self.sendMessage(msg)
          #-------------------------------------
          STOP_SERIAL = 0
          #-------------------------------------



    def handleConnected(self):
      global WebSocket_Status
      WebSocket_Status = 1
      print(self.address, 'connected')
	
    def handleClose(self):
      global WebSocket_Status
      WebSocket_Status = 0
      print(self.address, 'closed')


server = SimpleWebSocketServer('', 4000, SimpleEcho)
def thread_1():
	server.serveforever()
t = threading.Thread(target=thread_1)
t.daemon = True
t.start()




import serial, time, subprocess
while True:
    Serial_Connected = 0
    ##############################################################
    cmd = "ls /dev/ttyUSB*"
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
    (output, err) = p.communicate()
    p_status = p.wait()
    isOUT = str(output)
    print  (">> "+isOUT)
    #print  (">> "+str(p_status))
    ##############################################################
    if(isOUT.find('/dev/ttyUSB')>=0):
      is_ttyUSB_Status = 1
      is_ttyUSB_Name = isOUT.strip()
    else :
      is_ttyUSB_Status = 0
      is_ttyUSB_Name = ""   
    print("----------------------------")  
    print("is_ttyUSB_Status = "+str(is_ttyUSB_Status))
    print("is_ttyUSB_Name   = "+is_ttyUSB_Name)
    print("----------------------------")
    ##############################################################
    if(is_ttyUSB_Status==0):
      print("ttyUSB Status Error !!!")
      time.sleep(1)
      continue
    ##############################################################
    if(STOP_SERIAL==1):
      print "STOP_SERIAL break"
      time.sleep(1)
      continue
    ##############################################################
    ser = serial.Serial()
    ser.port     = is_ttyUSB_Name
    #ser.baudrate = 115200
    ser.baudrate = 9600
    ser.bytesize = serial.EIGHTBITS     #number of bits per bytes
    ser.parity   = serial.PARITY_NONE   #set parity check: no parity
    ser.stopbits = serial.STOPBITS_ONE  #number of stop bits
    #ser.timeout = None                 #block read
    ser.timeout  = 1                    #non-block read
    #ser.timeout = 2                    #timeout block read
    ser.xonxoff  = False                #disable software flow control
    ser.rtscts   = False                #disable hardware (RTS/CTS) flow control
    ser.dsrdtr   = False                #disable hardware (DSR/DTR) flow control
    ser.writeTimeout = 2                #timeout for write
    ##############################################################
    CONFIG = 0
    INFO   = 0
    SENSOR = 0
    WIFI   = 0
    ##############################################################
    def isSave(data):
      global CONF_I
      global CONF_N
      global CONF_P
      res  = data.split(':')
      isNum = int(data[0:1])
      CONF_I[isNum] = str(isNum)
      CONF_N[isNum] = res[0][3:].strip()
      CONF_P[isNum] = res[1].strip()
    ##############################################################

    try: 
        ser.open()
    except Exception, e:
        print "error open serial port: " + str(e)
        continue

    if ser.isOpen():
        try:
            Serial_Connected = 1
            ser.flushInput()
            ser.flushOutput()
            print("Connected !!!")
            print("----------------------------")
            while True:
              if(STOP_SERIAL==1):
                print "STOP_SERIAL break"
                break
              ######################################
              if(Serial_send_BACKSPACE == 1):
                  Serial_send_BACKSPACE = 0
                  ser.write(chr(127));
              ######################################
              if(Serial_Save_Status == 1):
                  Serial_Save_Status = 0
                  print( "SerData : " + Serial_Save_Data )
                  #ser.write(b(Serial_Save_Data))
                  #ser.write(str.encode(Serial_Save_Data))
                  rrr = Serial_Save_Data.encode('utf-8')
                  rrr = rrr.strip()
                  ser.write(rrr)
                  print( "SerData : " + rrr )
                  time.sleep(0.1)
                  print( "---------------")
                  ser.write(chr(13))
                  time.sleep(0.1)
              ######################################
              response = ser.readline()
              if(len(response)>4):
                  print(">> " + response.strip())
                  
                  #-------------------------------------
                  if(response.find('CONFIG STOP')==0): 
                    CONFIG = 0; Config_Ready = 1; continue

                  if(CONFIG == 1):
                    num  = response[0:1]
                    if(num=='1'): isSave(response)
                    if(num=='2'): isSave(response)
                    if(num=='3'): isSave(response)
                    if(num=='4'): isSave(response)
                    if(num=='5'): isSave(response)
                    if(num=='6'): isSave(response)
                    if(num=='7'): isSave(response)
                    if(num=='8'): isSave(response)
                    continue

                  if(response.find('CONFIG START')==0): 
                    CONFIG = 1; continue
                  #-------------------------------------
                  if(response.find('CONFIG END')==0): 
                    ConfiEnd_Ready = 1; continue
                  #-------------------------------------
                  if(response.find('INFO STOP')==0): 
                    INFO = 0; Info_Ready = 1; continue

                  if(INFO == 1):
                    INFO_TXT  = response.strip(); continue

                  if(response.find('INFO START')==0): 
                    INFO = 1; continue
                  #-------------------------------------
                  if(response.find('SENSOR STOP')==0): 
                    SENSOR = 0; Sensor_Ready = 1; continue

                  if(SENSOR == 1):
                    SENSOR_TXT  = response.strip(); continue

                  if(response.find('SENSOR START')==0): 
                    SENSOR = 1; continue
                  #-------------------------------------
                  if(response.find('WIFI OK')==0): 
                    WIFI_OK = 1; continue
                  #-------------------------------------
                  if(response.find('MQTT OK')==0): 
                    MQTT_OK = 1; continue
                  #-------------------------------------
                  if(response.find('WIFI START')==0): 
                    WIFI_START = 1; continue
                  #-------------------------------------
                  if(response.find('MQTT START')==0): 
                    MQTT_START = 1; continue
                  #-------------------------------------
                  if(response.find('WIFI ERROR')==0): 
                    WIFI_ERROR = 1; continue
                  #-------------------------------------
                  if(response.find('MQTT ERROR')==0): 
                    MQTT_ERROR = 1; continue
                  #-------------------------------------
                  if(response.find('MQTT PUBLISH')==0): 
                    MQTT_PUBLISH = 1; continue
                  #-------------------------------------
                  if(response.find('MQTT EXIT')==0): 
                    MQTT_EXIT = 1; continue
                  #-------------------------------------
                  if(response.find('WIFI EXIT')==0): 
                    WIFI_EXIT = 1; continue
                  #-------------------------------------






            ser.close()
        except Exception, e1:
            print "error communicating...: " + str(e1)
    else:
        print "cannot open serial port "

##############################################################
while True:
  #global Serial_Connected
  Serial_Connected = 0
  print("thread_2")
  time.sleep(1)
##############################################################
`);

