import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../../Transforms';

const Height_Header = ScreenHeight * 0.1;

export default StyleSheet.create({
  container: {
    width: ScreenWidth,
    paddingVertical: 20,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  textHeader: {
    fontSize: Fonts.size_responsive.medium,
    fontFamily: Fonts.type.bold,
    color: Colors.blueDarkSmartBuilding,
  },
  textHardCode: {
    fontSize: Fonts.size_responsive.medium,
    fontFamily: Fonts.type.medium,
    color: Colors.blueDarkSmartBuilding,
  },
  textSubtiitle: {
    fontSize: Fonts.size.small_13,
    fontFamily: Fonts.type.medium,
    color: Colors.greyDark,
    marginTop: 5,
  },
});
