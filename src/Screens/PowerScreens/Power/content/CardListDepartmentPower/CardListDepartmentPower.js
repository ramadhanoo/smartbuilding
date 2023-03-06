import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CardListDepartmentPower.styles';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts, Images} from '../../../../../Themes';
import PopUp from '../../../../../Images/svg/popUp.svg';
import ToggleSwitch from 'toggle-switch-react-native';
import DeptIcons from '../../../../../Images/svg/depticons.svg';

const CardListDepartmentPower = ({item, indexkey}) => {
  return (
    <View style={styles.container(indexkey)}>
      <View style={styles.cardContainerText}>
        <View style={styles.cardContainerIcons}>
          <DeptIcons />
        </View>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>{item.nama}</Text>
          <Text style={styles.subtitle}>{item.totalHours}</Text>
        </View>
        <View style={styles.cardSwitch}>
          <Text style={styles.title}>{item.totalKwh}</Text>
        </View>
      </View>
    </View>
  );
};

CardListDepartmentPower.defaultProps = {
  indexkey: 0,
  item: {
    nama: 'Departemen 1',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
};

export default CardListDepartmentPower;
