import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../../Transforms';

const CardWidth = ScreenWidth * 0.9;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteBackground,
  },
  tabContainer: {
    backgroundColor: Colors.whiteBackground,
    marginTop: 10,
    flex: 1,
  },
  loadingStyle: {
    width: CardWidth,
    backgroundColor: Colors.greyLight2,
    alignSelf: 'center',
    borderRadius: 10,
    height: CardWidth * 0.6,
    marginTop: 10,
  },
  containerCard: {
    paddingVertical: 5,
    height: '100%',
  },
  headerText: {
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.bold,
    color: Colors.blueDarkSmartBuilding,
  },
  containerStyleScroll: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerTextCard: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
