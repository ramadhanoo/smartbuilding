import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../../Transforms';

const Height_Header = ScreenHeight * 0.1;

export default StyleSheet.create({
  container: {
    width: ScreenWidth,
    alignSelf: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.whiteBackground,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftCard: {
    flex: 0.45,
    alignItems: 'flex-start',
  },
  rightCard: {
    flex: 0.45,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleDescCard: {
    flex: 0.88,
  },
  titleDescCardRight: {
    flex: 0.88,
  },
  title: {
    fontSize: Fonts.size.sub_small,
    fontFamily: Fonts.type.medium,
    color: Colors.greyDark,
  },
  subTitle: {
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.medium,
    color: Colors.blueDarkSmartBuilding,
    marginRight: 5,
    marginTop: 5,
  },
});
