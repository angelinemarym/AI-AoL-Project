import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  name: {
    marginLeft: 5,
    color: colors.bluePurple,
  },
  gap: {
    width: 16,
  },
});
