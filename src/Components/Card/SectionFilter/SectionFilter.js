import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './SectionFilter.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SectionFilter = ({
  stylesContainer,
  titleLeft,
  stylesTitleLeft,
  stylesTitleRight,
  titleRight,
  actionFilter,
}) => {
  return (
    <View style={[styles.container, stylesContainer]}>
      <View style={styles.leftCard}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={[styles.subTitle, stylesTitleLeft]}>
          {titleLeft}
        </Text>
      </View>
      <TouchableOpacity onPress={actionFilter} style={styles.rightCard}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={[styles.subTitle, stylesTitleRight]}>
          {titleRight}
        </Text>
        <Ionicons name="chevron-down" />
      </TouchableOpacity>
    </View>
  );
};

SectionFilter.defaultProps = {
  titleLeft: 'Title',
  titleRight: 'This Month',
  actionFilter: () => {},
  stylesTitleLeft: {},
  stylesTitleRight: {},
  stylesContainer: {},
};
