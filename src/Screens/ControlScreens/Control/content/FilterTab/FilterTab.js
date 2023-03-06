import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './FilterTab.styles';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../../../../../Themes';
const FilterTab = ({data, onPressItem, activeTab, indexData}) => {
  return (
    <TouchableOpacity
      onPress={() => onPressItem(data.categoryId, indexData, data.categoryName)}
      activeOpacity={0.8}
      style={styles.container(activeTab, data, indexData)}>
      <Text style={styles.textContainer(activeTab, data)}>
        {data.categoryName}
      </Text>
    </TouchableOpacity>
  );
};

FilterTab.defaultProps = {
  onPressItem: () => {},
  data: {
    categoryName: '',
    categoryId: '',
  },
  activeTab: '00',
  indexData: 0,
};

export default FilterTab;
