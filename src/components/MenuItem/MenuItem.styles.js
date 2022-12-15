import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  gap: {
    width: 16,
  },
  wrapper: {
    width: 152,
    height: 174,
  },
  image: {
    width: 152,
    height: 174,
  },
  descWrapper: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  discWrapper: {
    position: 'absolute',
    backgroundColor: colors.bluePurple,
    right: 0,
    top: 15,
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});
