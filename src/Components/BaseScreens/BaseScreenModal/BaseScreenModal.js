import React from 'react';
import {SafeAreaView, StatusBar, TouchableOpacity, View} from 'react-native';
import {ThemeSelectors} from '../../../Redux/ThemeRedux';
import {useSelector} from 'react-redux';
import {Colors} from '../../../Themes';
import styling from './BaseScreenModal.styles';

export const BaseScreenModal = React.forwardRef(({children, ...props}, ref) => {
  const themes = useSelector(ThemeSelectors.getColors);
  const isDark = useSelector(state => state.theme.dark);
  const styles = styling(props, themes);
  const {onPressBackdrop, useSafeArea} = props;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressBackdrop}
      style={styles.boxContainer}>
      {useSafeArea ? <SafeAreaView style={styles.container} /> : null}

      <View {...props}>{children}</View>
    </TouchableOpacity>
  );
});

BaseScreenModal.defaultProps = {
  safeAreaColor: Colors.white,
  onPressBackdrop: () => {},
  useSafeArea: true,
};
