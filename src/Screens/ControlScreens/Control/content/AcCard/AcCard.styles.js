import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Themes';
import {ScreenWidth} from '../../../../../Transforms';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.redSmartBuilding,
  },
  textContainer: {
    color: Colors.whiteCard,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.small_13,
    marginTop: 12,
  },
  thumStyles: {
    width: 19,
    height: 19,
    borderRadius: 13,
  },
  trackStyles: {
    width: 43,
    height: 24,
  },
  subtitle: {
    color: Colors.whiteCard,
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.sub_small,
    marginTop: 2,
  },
  temperatureText: {
    color: Colors.whiteCard,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h3,
    marginTop: 2,
  },
  spacing: {
    height: 20,
  },
  trackStyle: {
    height: 24,
    borderRadius: 20,
  },
  thumbStyle: {
    height: 0,
    width: 0,
    backgroundColor: Colors.blueSmartBuilding,
  },
  containerStyle: {
    borderRadius: 20,
  },
});
