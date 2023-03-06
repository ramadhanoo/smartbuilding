import React from 'react';
import styles from './Profile.styles';
// import {useProfile} from './useProfile';
import {BaseScreens, Header, Section} from '../../../Components/index';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import {Colors, Images} from '../../../Themes';
import moment from 'moment';
moment.locale('id');

const Profile = props => {
  //   const {state, actions} = useProfile();
  //   const {onPressDetail, actionsTabs, refreshData} = actions;
  //   const {categoryRedux, couponRedux, scrolling} = state;
  return (
    <BaseScreens
      safeAreaColor={Colors.whiteBackground}
      style={styles.container}>
      <Text>Profile</Text>
      <SafeAreaView style={styles.bottomArea} />
    </BaseScreens>
  );
};

Profile.options = {
  topBar: {
    visible: false,
  },
  statusBar: {
    backgroundColor: Colors.whiteCard,
  },
  navigationBar: {
    backgroundColor: Colors.whiteCard,
  },
};

export default Profile;
