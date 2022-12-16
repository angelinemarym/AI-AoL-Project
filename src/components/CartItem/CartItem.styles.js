import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.lightPurple,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 25,
    borderRadius: 20,
  },
  closeWrapper: {
    width: 27,
    height: 27,
    borderRadius: 27 / 2,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    // justifyContent: 'space-between',
  },
});
