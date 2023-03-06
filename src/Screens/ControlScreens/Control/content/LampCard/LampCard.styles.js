import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Themes';
import {ScreenWidth} from '../../../../../Transforms';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.redSmartBuilding,
  },
  textContainer: (colorIconText, kategori) => {
    return {
      color:
        kategori === 'LAMPU_UTAMA' ? Colors.whiteBackground : colorIconText,
      fontFamily: Fonts.type.bold,
      fontSize: Fonts.size.small_13,
      marginBottom: 20,
      marginTop: 10,
    };
  },
  thumStyles: {
    width: 19,
    height: 19,
    borderRadius: 10,
  },
  trackStyles: {
    width: 43,
    height: 24,
  },
});
