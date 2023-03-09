import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {ScreenHeight, ScreenWidth} from '../../../Transforms';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteBlur,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  box: {
    width: ScreenWidth,
    height: ScreenHeight * 0.7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.whiteCard,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  card: {
    width: ScreenWidth,
    paddingVertical: 10,
    borderColor: Colors.background,
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size_responsive.h3,
  },
  subTitleText: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.regular,
    color: Colors.greyText,
    marginTop: 6,
  },
});
