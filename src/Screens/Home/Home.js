import React from 'react';
import styles from './Home.styles';
import {useHome} from './useHome';
import {BaseScreens, Header, Section} from '../../Components/index';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import {Colors, Images} from '../../Themes';
import moment from 'moment';
moment.locale('id');

const Home = props => {
  const {state, actions} = useHome();
  const {onPressDetail, actionsTabs, refreshData} = actions;
  const {categoryRedux, couponRedux, scrolling} = state;
  return (
    <BaseScreens
      safeAreaColor={Colors.headerBaseColor}
      style={styles.container}>

      <SafeAreaView style={styles.bottomArea} />
    </BaseScreens>
  );
};

Home.options = {
  topBar: {
    visible: false,
  },
  statusBar: {
    backgroundColor: Colors.headerBaseColor,
  },
  navigationBar: {
    backgroundColor: Colors.headerBaseColor,
  },
};

export default Home;
