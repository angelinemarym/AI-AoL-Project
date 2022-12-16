import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.lightPurple,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 20,
  },
  image: {
    height: 154,
    width: 132,
    marginRight: 10,
  },
  desc: {
    flex: 1,
    marginRight: 10,
  },
  buttonQuantity: {
    paddingVertical: 0,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 0,
  },
  buttonCart: {
    borderRadius: 8,
    paddingVertical: 4,
    marginBottom: 0,
  },
});
