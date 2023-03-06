import React from 'react';
import {View, Text} from 'react-native';
import styles from './AcCard.styles';
import {Colors} from '../../../../../Themes';
import ToggleSwitch from 'toggle-switch-react-native';
import Ac from '../../../../../Images/svg/ac.svg';
import {Slider} from '@miblanchard/react-native-slider';

const AcCard = ({
  title,
  status,
  stylesCard,
  stylesText,
  subTitle,
  subTitleStyles,
  temperatureText,
}) => {
  return (
    <View style={stylesCard}>
      <Ac />
      <Text style={[styles.textContainer, stylesText]}>{title}</Text>
      <Text style={[styles.subtitle, subTitleStyles]}>{subTitle}</Text>
      <Text style={[styles.temperatureText]}>{temperatureText}</Text>
      <Slider
        value={2}
        minimumValue={0}
        maximumValue={10}
        thumbTintColor={Colors.darkBlue}
        thumbStyle={styles.thumbStyle}
        trackStyle={styles.trackStyle}
        minimumTrackTintColor={Colors.white}
        maximumTrackTintColor={Colors.BuildingToggle}
        animationType={'timing'}
      />
      <View style={styles.spacing} />
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

AcCard.defaultProps = {
  title: 'Title',
  subTitle: 'Desired temperature',
  temperatureText: '20°C',
  status: false,
  stylesCard: {},
  stylesText: {},
  subTitleStyles: {},
};

export default AcCard;
