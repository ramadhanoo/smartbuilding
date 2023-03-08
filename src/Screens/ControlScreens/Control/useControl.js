import {useSelector, useDispatch} from 'react-redux';
import {ThemeSelectors} from '../../../Redux/ThemeRedux';
import NavigationServices from '../../../Navigation/NavigationServices';
import CategoryActions from '../../../Redux/CategoryRedux';
import {useEffect, useState, useRef} from 'react';
import MQTTConnection from '../../../Services/MQTTConnection';
import {MQTT_DATA} from '../../../Data/Constans';
import MqttNotificationsManager from '../../../Services/SpMQTT';

MqttNotificationsManager.create('bob', {
  host: '10.100.2.41',
  port: 1883,
});

export const useControl = () => {
  const dispatch = useDispatch();
  const themes = useSelector(ThemeSelectors.getColors);
  const categoryRedux = useSelector(state => state.category);
  const couponRedux = useSelector(state => state.coupon);
  const [activeTab, setActiveTab] = useState('1');
  const [activeTabName, setActiveTabName] = useState('Departement 1');
  // const [mqttConnect, setMqttConnect] = useState(new MQTTConnection());
  const [cardLeft, setCardLeft] = useState([]);
  const [cardRight, setcardRight] = useState([]);
  const scrolling = useRef(null);

  useEffect(() => {
    // dispatch(CategoryActions.setCategoryReq({actionType: 'load'}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // mqttConnect = new MQTTConnection();
    separateArrays(categoryRedux.data[activeTabName]);
    // mqttConnect.onMQTTConnect = onMQTTConnect;
    // mqttConnect.onMQTTLost = onMQTTLost;
    // mqttConnect.onMQTTMessageArrived = onMQTTMessageArrived;
    // mqttConnect.onMQTTMessageDelivered = onMQTTMessageDelivered;

    // mqttConnect.connect(MQTT_DATA.host, MQTT_DATA.port);
    //mqttConnect, onMQTTConnect
    // return () => {
    //   mqttConnect.close();
    // };
  }, [activeTabName, categoryRedux.data]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onMQTTConnect = () => {
    console.log('app onMQTTConnect');
    // mqttConnect.subscribeChannel(MQTT_DATA.path);
  };

  const onMQTTLost = () => {
    console.log('app onMQTTLost');
  };

  const onMQTTMessageArrived = message => {
    console.log('App onMQTTMessageArrived: ', message);
    console.log('App payload: ', message.payloadString);
  };

  const onMQTTMessageDelivered = message => {
    console.log('App onMQTTMessageDelivered', message);
  };

  const actionsTabs = (id, index, name) => {
    scrolling.current?.scrollToIndex({
      animated: true,
      index: index,
      viewOffset: 70,
    });
    setActiveTab(id);
    setActiveTabName(name);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refreshData = () => {
    // dispatch(CategoryActions.setCategoryReq({actionType: 'refresh'}));
  };

  const sendData = () => {
    // mqttConnect.send(MQTT_DATA.path, 'asmessage need send');
  };

  const separateArrays = array => {
    console.tron.log('hahahah');
    let arr1 = [];
    let arr2 = [];
    for (var i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        arr1.push(array[i]);
      } else {
        arr2.push(array[i]);
      }
    }
    setCardLeft([...arr1]);
    setcardRight([...arr2]);
  };

  const onPressDetail = item => {
    NavigationServices.push('home.detail', {data: item});
  };

  return {
    state: {
      cardLeft,
      cardRight,
      themes,
      setActiveTab,
      activeTab,
      categoryRedux,
      couponRedux,
      scrolling,
      activeTabName,
    },
    actions: {
      actionsTabs,
      sendData,
      refreshData,
      onPressDetail,
      setActiveTabName,
    },
    data: {},
  };
};
