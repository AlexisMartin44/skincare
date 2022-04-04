/*
 * Send data to Node Red via MQTT protocol and connect the ESP to the Wifi
 * Collect datas of the sensor via I2C communication and send it to Node-red server
 * 
 * Components used: ESP-WROOM-32 and MIKROE-3084
*/
#include <WiFi.h>
#include <Wire.h>
#include <PubSubClient.h>

#define I2C_SDA 21
#define I2C_SCL 22

#define SENSOR_ADDR 0x2A //read with the i2cScan()
#define CONFIG_REG 0x1A
#define DATA_CH0_ADDR 0x00  //Channel 0 Conversion Result and status (FDC2112 / FDC2114 only)
#define RCOUNT_CH0_REG 0x08
#define OFFSET_CH0_REG 0x0C
#define SETTLECOUNT_CH0_REG 0x10
#define CLOCK_DIVIDER_CH0_REG 0x14
#define ERROR_CONFIG_REG 0x19
#define MUX_CONFIG_REG 0x1B
#define DRIVE_CURRENT_CH0_REG 0x1E
#define STATUS_REG 0x18
#define STATUS_CONFIG_REG 0x19
#define RESET_DEV_REG 0x1C


const char* ssid = "<YourWifiName>";
const char* password = "<YourPassword>";
const char* mqtt_server = "<IPAddress>";

void wifiConfiguration();
void i2cScan();
void configSensor();
void readDataCh0();
void callback(char* topic, byte* payload, unsigned int length);
void reconnect();
void sendDataToNodeRed();

WiFiClient espClient;
PubSubClient client(espClient);
unsigned long lastMsg = 0;
#define MSG_BUFFER_SIZE  (50)
char msg[MSG_BUFFER_SIZE];
int valueMap = 0;

#define BUILTIN_LED 2


void setup(){
  Wire.begin(I2C_SDA,I2C_SCL); //Start I2C
  pinMode(BUILTIN_LED, OUTPUT);     // Initialize the BUILTIN_LED pin as an output
  
  Serial.begin(115200);
  delay(1000);

  wifiConfiguration();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
  
  i2cScan();
  configSensor(); 
}


void loop(){
  readDataCh0();
  delay(500);
  sendDataToNodeRed();

}

///////// SUBROUTINES //////////////

void wifiConfiguration(){
//=========== WIFI CONFIGURATION =============
  delay(10);
  WiFi.mode(WIFI_STA); //Optional
  WiFi.begin(ssid, password);
  Serial.println("\nConnecting");
  
  while(WiFi.status() != WL_CONNECTED){
  Serial.print(".");
  delay(100);
  }

  randomSeed(micros());
  
  Serial.println("\nConnected to the WiFi network");
  Serial.print("Local ESP32 IP: ");
  Serial.println(WiFi.localIP());
//=========== WIFI CONFIGURATION =============
}

void i2cScan(){
//=========== I2C ADDRESS SCANNING =============
  Serial.println("\nI2C Scanner");
  byte address_sensor, error;
  int nDevices;
  Serial.println("Scanning...");
  nDevices = 0;
  for(address_sensor = 1; address_sensor < 127; address_sensor++ ) {
    Wire.beginTransmission(address_sensor);
    error = Wire.endTransmission();
    if (error == 0) {
      Serial.print("I2C device found at address 0x");
      if (address_sensor<16) {
        Serial.print("0");
      }
      Serial.println(address_sensor,HEX);
      nDevices++;
    }
    else if (error==4) {
      Serial.print("Unknow error at address 0x");
      if (address_sensor<16) {
        Serial.print("0");
      }
      Serial.println(address_sensor,HEX); //print 0x2A
    }    
  }
  if (nDevices == 0) {
    Serial.println("No I2C devices found\n");
  }
  else {
    Serial.println("done\n");
  }

  delay(2000);
//=========== I2C ADDRESS SCANNING =============
}

void configSensor(){
//=========== CONFIGURATION SENSOR =============
  //https://arduino.stackexchange.com/questions/68449/how-do-you-write-to-a-specific-register-using-i2c-communcation
  //WRITE
  Wire.beginTransmission(SENSOR_ADDR); //Chip address
  Wire.write(RESET_DEV_REG); //Register Address
  Wire.write(0x06); //bit[15]Device Reset //bit[10:9]Output_Gain
  Wire.write(0X00); 
  Wire.endTransmission(); //sendData
  delay(10);
  Wire.beginTransmission(SENSOR_ADDR); //Chip address
  Wire.write(CONFIG_REG); //Register Address
  Wire.write(0b00001100); //bit[15:14]ACTIVE_CHAN //bit[13]SLEEP_MODE_EN //bit[11]SENSOR_ACTIVATE_SEL //bit[9]REF_CLK_SRC
  Wire.write(0b00000001); //bit[7]INTB_DIS (The INTB function must be enabled by setting CONFIG.INTB_DIS to 0)
  Wire.endTransmission();
  //Wire.endTransmission(false); Sépare l'envoi de la commande et la lecure du data
  delay(10);
  Wire.beginTransmission(SENSOR_ADDR); //Chip address
  Wire.write(MUX_CONFIG_REG); //Register Address
  Wire.write(0x02);
  Wire.write(0x0B);  //0x09 1MHz //0x0C 3.3MHz //0x0D 10MHz //0X0B 33MHz
  Wire.endTransmission(); //sendData
  delay(10);
  
  //READ
  Wire.beginTransmission(SENSOR_ADDR);
  Wire.write(CONFIG_REG);
  Wire.endTransmission();
  Wire.requestFrom(SENSOR_ADDR, 2); // This register is 16 bits = 2 bytes long
  delay(5); // Wait for data to be available
  // Read into a 2-byte buffer
  uint8_t buf[2];
  Wire.readBytes(buf, 2);
  // Print register value
  Serial.printf("CONFIG_REG: 0x%02x 0x%02x\r\n", buf[0], buf[1]);
 // Serial.print("BUF 0 : "); Serial.print(buf[0],BIN); Serial.print(" | BUF 1 : "); Serial.println(buf[1],BIN);

  Wire.beginTransmission(SENSOR_ADDR);
  Wire.write(MUX_CONFIG_REG);
  Wire.endTransmission();
  Wire.requestFrom(SENSOR_ADDR, 2); // This register is 16 bits = 2 bytes long
  delay(5); // Wait for data to be available
  Wire.readBytes(buf, 2);
  Serial.printf("MUX_CONFIG_REG: 0x%02x 0x%02x\r\n", buf[0], buf[1]);

  Wire.beginTransmission(SENSOR_ADDR);
  Wire.write(RESET_DEV_REG);
  Wire.endTransmission();
  Wire.requestFrom(SENSOR_ADDR, 2); // This register is 16 bits = 2 bytes long
  delay(5); // Wait for data to be available
  Wire.readBytes(buf, 2);
  Serial.printf("RESET_DEV_REG: 0x%02x 0x%02x\r\n\n", buf[0], buf[1]);
//=========== CONFIGURATION SENSOR ============= 
}
void readDataCh0(){
    //READ
  Wire.beginTransmission(SENSOR_ADDR);
  Wire.write(DATA_CH0_ADDR);
  Wire.endTransmission();
  Wire.requestFrom(SENSOR_ADDR, 2); // This register is 16 bits = 2 bytes long
  delay(5); // Wait for data to be available
  byte buf[2]; // Read into a 2-byte buffer
  Wire.readBytes(buf, 2);
  
  unsigned long combined = 0; // clear it out
  combined = ( buf[0] << 8) | (buf[1]);
  valueMap = map (combined, 130,75, 0, 100);
  //Serial.println(combined); 
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();

  // Switch on the LED if an 1 was received as first character
  if ((char)payload[0] == '1') {
    digitalWrite(BUILTIN_LED, LOW);   // Turn the LED on (Note that LOW is the voltage level)
  } else {
    digitalWrite(BUILTIN_LED, HIGH);  // Turn the LED off by making the voltage HIGH
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Create a random client ID
    String clientId = "ESP32Client-";
    clientId += String(random(0xffff), HEX);
    // Attempt to connect
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      // Once connected, publish an announcement...
      client.publish("outTopic", "hello world");
      // ... and resubscribe
      client.subscribe("inTopic");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000); // Wait 5 seconds before retrying
    }
  }
}

void sendDataToNodeRed(){
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  
  unsigned long now = millis();
  if (now - lastMsg > 2000) {
    lastMsg = now;
    snprintf (msg, MSG_BUFFER_SIZE,"%d", valueMap);
    Serial.print("Publish message: ");
    Serial.println(msg);
    client.publish("outTopic", msg);
  }
}
