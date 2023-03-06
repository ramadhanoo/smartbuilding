import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../../Transforms';

const Height_Header = ScreenHeight * 0.1;

export default StyleSheet.create({
  container: {
    width: ScreenWidth * 0.9,
    alignSelf: 'center',
    paddingVertical: 25,
    backgroundColor: Colors.whiteCard,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftCard: {
    flex: 0.45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightCard: {
    flex: 0.45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: Fonts.size.small_13,
    fontFamily: Fonts.type.bold,
    color: Colors.blueDarkSmartBuilding,
    marginTop: 5,
  },
});
