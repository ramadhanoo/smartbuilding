import React from 'react';
import {View, Text} from 'react-native';
import styles from './AllDeviceCard.styles';
import {Colors} from '../../../../../Themes';
import ToggleSwitch from 'toggle-switch-react-native';

const AllDeviceCard = ({title, status, stylesCard, stylesText}) => {
  return (
    <View style={stylesCard}>
      <Text style={[styles.textContainer, stylesText]}>{title}</Text>
      <ToggleSwitch
        isOn={status}
        onColor="rgba(255, 255, 255, 0.3)"
        offColor={Colors.blueDarkSmartBuilding}
        thumbOffStyle={styles.thumStyles}
        thumbOnStyle={styles.thumStyles}
        trackOnStyle={styles.trackStyles}
        trackOffStyle={styles.trackStyles}
        size="small"
        onToggle={isOn => console.log('changed to : ', isOn)}
      />
    </View>
  );
};

AllDeviceCard.defaultProps = {
  title: '',
  status: false,
  stylesCard: {},
  stylesText: {},
};

export default AllDeviceCard;
