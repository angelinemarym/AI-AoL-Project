import {StyleSheet} from 'react-native';
import colors from '../colors';
import {fontWeight, textSize} from '../text';

const GlobalStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  bodyText: {
    color: colors.black,
    fontSize: textSize.normal,
    fontWeight: fontWeight.normal,
  },
  semiBodyText: {
    color: colors.black,
    fontSize: textSize.semiNormal,
    fontWeight: fontWeight.normal,
  },
  titleText: {
    color: colors.white,
    fontSize: textSize.title,
    fontWeight: fontWeight.bold,
  },
  subTitleText: {
    color: colors.black,
    fontSize: textSize.subTitle,
    fontWeight: fontWeight.bold,
  },
  horizontalCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GlobalStyles;
