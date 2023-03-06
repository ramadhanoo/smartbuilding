import React from 'react';
import {View, Text} from 'react-native';
import styles from './CardVolt.styles';
import Calender from '../../../Images/svg/calendar.svg';
import Thunder from '../../../Images/svg/thunder.svg';

export const CardVolt = ({
  titleLeft,
  titleRight,
  textDescLeft,
  textDescRight,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCard}>
        <Thunder />
        <View style={styles.titleDescCard}>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.title}>
            {titleLeft}
          </Text>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.subTitle}>
            {textDescLeft}
          </Text>
        </View>
      </View>
      <View style={styles.rightCard}>
        <Calender />
        <View style={styles.titleDescCardRight}>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.title}>
            {titleRight}
          </Text>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.subTitle}>
            {textDescRight}
          </Text>
        </View>
      </View>
    </View>
  );
};

CardVolt.defaultProps = {
  titleLeft: 'Title',
  titleRight: 'This Month',
  textDescLeft: '149.3 KwH',
  textDescRight: '832.7 KwH',
};
