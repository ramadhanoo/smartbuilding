import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';

export const Header = ({username, location}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>
        <Text style={styles.textHardCode}>Hey, </Text> {username}
      </Text>
      <Text style={styles.textSubtiitle}>{location}</Text>
    </View>
  );
};

Header.defaultProps = {
  username: 'Dio Dava Ramadha',
  location: 'Jakarta Barat, 24°C',
};
