import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {fontWeight, textSize} from '../../utils/text';

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  transparentBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.splash,
    position: 'absolute',
  },
  titleText: {
    color: colors.white,
    fontSize: textSize.appName,
    fontWeight: fontWeight.bold,
  },
});
