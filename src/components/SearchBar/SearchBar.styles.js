import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {SCREEN_WIDTH} from '../../utils/constants';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    width: SCREEN_WIDTH - 150,
    color: colors.black,
  },
  searchIconWrapper: {
    backgroundColor: colors.bluePurple,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
});
