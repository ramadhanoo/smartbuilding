import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Themes';
import {
  scaleWithPixel,
  ScreenHeight,
  ScreenWidth,
} from '../../../../../Transforms';

const CardWidth = ScreenWidth * 0.9;

export default StyleSheet.create({
  container: indexkey => {
    return {
      width: CardWidth,
      marginTop: indexkey === 0 ? 0 : 10,
      backgroundColor: Colors.whiteBackground,
      paddingBottom: 10,
      alignSelf: 'center',
      borderColor: Colors.greyLight2,
      borderBottomWidth: 1,
    };
  },
  imageStyle: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  cardContainerIcons: {
    alignItems: 'center',
    marginRight: 10,
  },
  cardContainerText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    flex: 0.7,
    paddingTop: 5,
  },
  cardSwitch: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: Fonts.size.small_13,
    fontFamily: Fonts.type.semibold,
    color: Colors.blueDarkSmartBuilding,
  },
  subtitle: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.semibold,
    color: Colors.greyDark,
    marginTop: 4,
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
