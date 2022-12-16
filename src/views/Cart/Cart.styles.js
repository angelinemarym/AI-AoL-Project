import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    padding: 16,
    width: '100%',
    backgroundColor: colors.darkBlue,
  },
  orderSuccess: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.splash,
  },
});
