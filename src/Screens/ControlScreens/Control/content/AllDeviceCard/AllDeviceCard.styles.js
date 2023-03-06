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
    marginBottom: 20,
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
});
