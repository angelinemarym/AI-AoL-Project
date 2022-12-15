import {View, Text} from 'react-native';
import React from 'react';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import colors from '../../utils/colors';

const Cart = () => {
  return (
    <View style={[GlobalStyles.verticalCenter, GlobalStyles.wrapper]}>
      <Text style={[GlobalStyles.bodyText, {color: colors.white}]}>
        Cart Page
      </Text>
    </View>
  );
};

export default Cart;
