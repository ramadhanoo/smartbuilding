import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './AllDeviceCard.styles';
import {Colors} from '../../../../../Themes';
import ToggleSwitch from 'toggle-switch-react-native';

const AllDeviceCard = ({
  title,
  status,
  stylesCard,
  stylesText,
  onPressData,
}) => {
  return (
    <TouchableOpacity onPress={onPressData} style={stylesCard}>
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
    </TouchableOpacity>
  );
};

AllDeviceCard.defaultProps = {
  title: '',
  status: false,
  stylesCard: {},
  stylesText: {},
  onPressData: () => {},
};

export default AllDeviceCard;
