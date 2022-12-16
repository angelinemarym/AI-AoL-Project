import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CartItem.styles';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import colors from '../../utils/colors';
import {fontWeight} from '../../utils/text';
import {IconClose} from '../../assets/icons';

const CartItem = ({quantity, name, price, restaurantName, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <View style={[GlobalStyles.horizontalCenter, styles.titleWrapper]}>
        <Text
          style={[
            GlobalStyles.subTitleText,
            {color: colors.gray59, marginRight: 10},
          ]}>
          {quantity}x
        </Text>
        <Text
          style={[GlobalStyles.subTitleText, {color: colors.gray59, flex: 1}]}>
          {name}
        </Text>
        <Text
          style={[
            GlobalStyles.subTitleText,
            {
              color: colors.gray59,
              fontWeight: fontWeight.normal,
              marginRight: 10,
            },
          ]}>
          LKR {price * quantity}
        </Text>
        <TouchableOpacity style={styles.closeWrapper} onPress={onPress}>
          <IconClose />
        </TouchableOpacity>
      </View>
      <Text
        style={[GlobalStyles.bodyText, {color: colors.gray6C, marginLeft: 26}]}>
        {restaurantName}
      </Text>
    </View>
  );
};

export default CartItem;
