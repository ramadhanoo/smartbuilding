import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Themes';
import {
  scaleWithPixel,
  ScreenHeight,
  ScreenWidth,
} from '../../../../../Transforms';

const CardWidth = ScreenWidth * 0.9;

export default StyleSheet.create({
  container: {
    width: CardWidth,
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: Colors.blueSmartBuilding,
    paddingBottom: 10,
  },
  imageStyle: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  cardContainerImage: {
    flex: 0.6,
    padding: 6,
  },
  cardContainerText: {
    flex: 0.4,
    paddingHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    flex: 0.7,
  },
  cardSwitch: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerIcons: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1000,
  },
  title: {
    fontSize: Fonts.size.small_13,
    fontFamily: Fonts.type.semibold,
    color: Colors.white,
    marginTop: 10,
  },
  subtitle: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.semibold,
    color: Colors.white,
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
