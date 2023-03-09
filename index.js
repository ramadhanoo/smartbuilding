/**
 * @format
 */
import MqttNotificationsManager from './src/Services/SpMQTT';

MqttNotificationsManager.create('bob', {
  host: '10.100.2.41',
  port: 1883,
});

require('./src/Config/ReactotronConfig');
require('./src/Navigation/index');
