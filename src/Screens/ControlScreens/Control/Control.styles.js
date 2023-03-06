import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../../Transforms';

const ImageWidth = ScreenWidth * 0.3;

export const menuPerRow = 2;
const windowWidth = Dimensions.get('window').width;
const containerWidth = windowWidth - 10 * 2;
const totalSpaceBetweenContent = 10 * (menuPerRow * 2);
const contentWidth = (containerWidth - totalSpaceBetweenContent) / menuPerRow;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteBackground,
  },
  tabContainer: {
    paddingVertical: 5,
    backgroundColor: Colors.whiteBackground,
    marginTop: 13,
  },
  containerCard: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  loadingStyle: {
    width: ImageWidth,
    backgroundColor: Colors.greyLight,
    borderRadius: 10,
    height: 30,
    marginRight: 10,
  },
  controlCardContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
  },
  containerLeft: {
    flex: 0.5,
    alignItems: 'center',
    paddingLeft: 10,
  },
  containerRight: {
    flex: 0.5,
    alignItems: 'center',
    paddingRight: 10,
  },
  cardSample: (index, color) => {
    return {
      width: '90%',
      backgroundColor: color,
      marginTop: 10,
      paddingVertical: 20,
      borderRadius: 20,
      paddingHorizontal: 20,
    };
  },
});
