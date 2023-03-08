// import AsyncStorage from '@react-native-async-storage/async-storage';
// import init from 'react_native_mqtt';
// import uuid from 'react-native-uuid';

// console.log('hahahahah');

// init({
//   size: 10000,
//   storageBackend: AsyncStorage,
//   defaultExpires: 1000 * 3600 * 24,
//   enableCache: true,
//   sync: {},
// });

// const defaultConnectOptions = {
//   reconnect: true,
//   cleanSession: true,
//   mqttVersion: 3,
//   keepAliveInterval: 60,
//   timeout: 60,
// };
// // 创建客户端实例
// // var client = new Paho.MQTT.Client(options.host, options.port, options.path);

// export default class MQTTConnection {
//   constructor() {
//     this.mqtt = null;
//     this.QOS = 0;
//     this.RETAIN = true;
//   }

//   connect(host, port, options = null) {
//     if (options) {
//       this.QOS = options.qos;
//       this.RETAIN = options.retain;
//     }

//     let currentTime = +new Date();
//     let clientID = currentTime + uuid.v1();
//     clientID = clientID.slice(0, 23);
//     console.log('clientid', clientID);

//     this.mqtt = new Paho.MQTT.Client(host, port, clientID);

//     this.mqtt.onConnectionLost = res => {
//       this.onMQTTLost;
//     };

//     this.mqtt.onMessageArrived = message => {
//       this.onMQTTMessageArrived(message);
//     };

//     this.mqtt.onMessageDelivered = message => {
//       this.onMQTTMessageDelivered(message);
//     };

//     const connectOptions = options ? options : defaultConnectOptions;
//     this.mqtt.connect({
//       onSuccess: this.onMQTTSuccess,
//       onFailure: this.onMQTTFailure,
//       ...connectOptions,
//     });
//   }

//   onMQTTSuccess = () => {
//     this.onMQTTConnect();
//   };

//   onMQTTFailure = () => {
//     this.onMQTTLost();
//   };

//   subscribeChannel(channel) {
//     console.log('mqtt connection subscribeChannel: ', channel);
//     if (!this.mqtt || !this.mqtt.isConnected()) {
//       return;
//     }
//     this.mqtt.subscribe(channel, this.QOS);
//   }

//   unSubscribeChannel(channel) {
//     console.log('mqtt connection unSubscribeChannel: ', channel);
//     if (!this.mqtt || !this.mqtt.isConnected()) {
//       return;
//     }
//     this.mqtt.unsubscribe(channel, this.QOS);
//   }

//   send(channel = null, payload) {
//     console.log('MQTT Connection send: ');
//     if (!this.mqtt || !this.mqtt.isConnected()) {
//       return;
//     }

//     if (!channel || !payload) {
//       return false;
//     }

//     console.log(`mqtt send publish channel ${channel}, payload: ${payload}`);
//     this.mqtt.publish(channel, payload, this.QOS, this.RETAIN);
//   }

//   close() {
//     this.mqtt && this.mqtt.disconnect();
//     this.mqtt = null;
//   }
// }

// MQTTConnection.prototype.onMQTTConnect = null;
// MQTTConnection.prototype.onMQTTLost = null;
// MQTTConnection.prototype.onMQTTMessageArrived = null;
// MQTTConnection.prototype.onMQTTMessageDelivered = null;
