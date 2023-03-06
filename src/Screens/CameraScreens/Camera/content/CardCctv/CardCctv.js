import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CardCctv.styles';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts, Images} from '../../../../../Themes';
import PopUp from '../../../../../Images/svg/popUp.svg';
import ToggleSwitch from 'toggle-switch-react-native';

const CardCctv = ({status}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainerImage}>
        <TouchableOpacity activeOpacity={0.8} style={styles.containerIcons}>
          <PopUp />
        </TouchableOpacity>
        <Image
          resizeMode="cover"
          source={Images.cctv}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.cardContainerText}>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>CCTV 1</Text>
          <Text style={styles.subtitle}>Lantai 3 samping Lift</Text>
        </View>
        <View style={styles.cardSwitch}>
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
      </View>
    </View>
  );
};

CardCctv.defaultProps = {
  status: true,
};

export default CardCctv;
