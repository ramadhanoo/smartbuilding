import React from 'react';
import styles from './ModalFilter.styles';
import {useModalFilter} from './useModalFilter';
import {BaseScreenModal, BaseScreens} from '../../../Components/index';
import {Text, View, TouchableOpacity} from 'react-native';
import {Colors} from '../../../Themes';
import {LOCATIONS} from '../../../Data/Constans';

const ModalFilter = props => {
  const {state, actions} = useModalFilter();
  const {dismisModal} = actions;
  const {themes} = state;

  return (
    <BaseScreenModal
      onPressBackdrop={dismisModal}
      useSafeArea={false}
      style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Nyari apaan?</Text>
      </View>
    </BaseScreenModal>
  );
};

ModalFilter.options = {
  topBar: {
    visible: false,
  },
  modalTransitionStyle: 'flipHorizontal',
  modalPresentationStyle: 'overCurrentContext',
  layout: {
    backgroundColor: 'transparent',
    componentBackgroundColor: 'transparent',
  },
};

export default ModalFilter;
