import {View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import colors from '../../utils/colors';
import {Button, CartItem, Header} from '../../components';
import styles from './Cart.styles';
import {useState} from 'react';
import {IconCheck} from '../../assets/icons';

const Cart = ({navigation}) => {
  const [orderSuccess, setOrderSuccess] = useState(false);

  return (
    <>
      <View style={GlobalStyles.wrapper}>
        <Header onPress={() => navigation.goBack()} title="Shopping Cart" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingTop: 10}}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ScrollView>
        <View style={styles.footer}>
          <View
            style={[
              GlobalStyles.horizontalCenter,
              {justifyContent: 'space-between'},
            ]}>
            <Text style={[GlobalStyles.semiBodyText, {color: colors.grayCE}]}>
              Delivery
            </Text>
            <Text style={[GlobalStyles.semiBodyText, {color: colors.grayCE}]}>
              Free
            </Text>
          </View>
          <View
            style={[
              GlobalStyles.horizontalCenter,
              {justifyContent: 'space-between', marginBottom: 25},
            ]}>
            <Text style={GlobalStyles.titleText}>Total</Text>
            <Text style={GlobalStyles.titleText}>LKR 1399.00</Text>
          </View>
          <Button text="Make Order" onPress={() => setOrderSuccess(true)} />
          <Button
            text="Continue Shopping"
            backgroundColor={colors.lightPurple}
            fontColor={colors.bluePurple}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
      {orderSuccess && (
        <Pressable
          onPress={() => setOrderSuccess(false)}
          style={styles.orderSuccess}>
          <IconCheck />
          <Text style={[GlobalStyles.subTitleText, {color: colors.white}]}>
            Order Success!
          </Text>
        </Pressable>
      )}
    </>
  );
};

export default Cart;
