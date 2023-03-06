import React from 'react';
import {View, Text} from 'react-native';
import styles from './LampCard.styles';
import {Colors} from '../../../../../Themes';
import ToggleSwitch from 'toggle-switch-react-native';
import Lamp from '../../../../../Images/svg/lamp.svg';

const LampCard = ({
  title,
  status,
  stylesCard,
  stylesText,
  colorIconText,
  kategori,
}) => {
  return (
    <View style={stylesCard}>
      <Lamp
        stroke={
          kategori === 'LAMPU_UTAMA' ? Colors.whiteBackground : colorIconText
        }
      />
      <Text style={[styles.textContainer(colorIconText, kategori), stylesText]}>
        {title}
      </Text>
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

LampCard.defaultProps = {
  title: '',
  status: false,
  stylesCard: {},
  stylesText: {},
  colorIconText: '#fff',
  kategori: 'LAMPU_AREA',
};

export default LampCard;
