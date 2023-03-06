import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Themes';
import {ScreenWidth} from '../../../../../Transforms';

export default StyleSheet.create({
  container: (activeTab, data, indexData) => {
    return {
      paddingHorizontal: 22,
      marginRight: 10,
      marginLeft: indexData === 0 ? 25 : 0,
      paddingVertical: 10,
      borderColor: Colors.orange,
      backgroundColor:
        activeTab === data.categoryId
          ? Colors.blueDarkSmartBuilding
          : Colors.whiteCard,
      borderRadius: 20,
      //   borderBottomWidth: activeTab === data.categoryId ? 1 : 0,
    };
  },
  textContainer: (activeTab, data) => {
    return {
      color: activeTab === data.categoryId ? Colors.whiteCard : Colors.greyDark,
      fontFamily: Fonts.type.medium,
      fontSize: Fonts.size.small_13,
    };
  },
});
