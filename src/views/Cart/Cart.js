import {View, Text, ScrollView, Pressable, FlatList, Alert} from 'react-native';
import React from 'react';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import colors from '../../utils/colors';
import {Button, CartItem, Header} from '../../components';
import styles from './Cart.styles';
import {useState} from 'react';
import {IconCart, IconCheck} from '../../assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart, removeFromCart} from '../../redux/actions/actionOrder';
import {useEffect} from 'react';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const cart = useSelector(state => state.reducerOrder.cart);
  const [currentCart, setCurrentCart] = useState([]);
  const [total, setTotal] = useState(0);

  const removeItemFromCart = async id => {
    const updatedCart = currentCart.filter(item => item.id != id);
    setCurrentCart(updatedCart);
    await dispatch(removeFromCart(id));
    Alert.alert('Removed', 'Item has been removed from cart.');
  };

  const handleMakeOrder = async () => {
    if (total > 0) {
      setOrderSuccess(true);
      setCurrentCart([]);
      await dispatch(clearCart());
    } else {
      Alert.alert('Error', 'The cart is still empty.');
    }
  };

  useEffect(() => {
    setCurrentCart(cart);
    let currentTotal = 0;
    cart.forEach(item => {
      currentTotal += item.price * item.quantity;
    });
    setTotal(currentTotal);
  }, [cart]);

  const EmptyCartState = () => {
    return (
      <View style={[GlobalStyles.wrapper, GlobalStyles.verticalCenter]}>
        <IconCart fill={colors.white} />
        <Text
          style={[GlobalStyles.bodyText, {color: colors.white, marginTop: 10}]}>
          Your cart is empty. Let's start shopping!
        </Text>
      </View>
    );
  };

  return (
    <>
      <View style={GlobalStyles.wrapper}>
        <Header onPress={() => navigation.goBack()} title="Shopping Cart" />
        {total == 0 ? (
          <EmptyCartState />
        ) : (
          <FlatList
            style={{paddingTop: 10, flex: 1}}
            showsVerticalScrollIndicator={false}
            data={currentCart}
            renderItem={({item}) => (
              <CartItem {...item} onPress={() => removeItemFromCart(item.id)} />
            )}
          />
        )}
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
            <Text style={GlobalStyles.titleText}>LKR {total}</Text>
          </View>
          <Button text="Make Order" onPress={handleMakeOrder} />
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
