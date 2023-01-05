import {View, Text, Image, Alert} from 'react-native';
import React from 'react';
import styles from './MenuListItem.styles';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import colors from '../../utils/colors';
import {useState} from 'react';
import Button from '../Button/Button';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  updateItemQuantity,
} from '../../redux/actions/actionOrder';

const MenuListItem = ({
  name,
  description,
  price,
  image,
  restaurantName,
  id,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [disableCart, setDisableCart] = useState(false);
  const cart = useSelector(state => state.reducerOrder.cart);

  const addQuantity = prevQuantity => {
    setQuantity(prevQuantity + 1);
  };

  const substractQuantity = prevQuantity => {
    if (prevQuantity > 0) setQuantity(prevQuantity - 1);
    else setQuantity(0);
  };

  useEffect(() => {
    if (quantity == 0) {
      setDisableCart(true);
    } else {
      setDisableCart(false);
    }
  }, [quantity]);

  useEffect(() => {
    const foodInCartDetail = cart?.find(i => i.id == i.id);
    if (foodInCartDetail && name == foodInCartDetail.name) {
      setQuantity(foodInCartDetail.quantity);
    } else {
      setQuantity(0);
    }
  }, [cart]);

  const handleAddToCart = async () => {
    const data = {
      id,
      name,
      quantity,
      price,
      restaurantName,
    };

    if (cart.some(item => item.id == data.id)) {
      await dispatch(updateItemQuantity(id, quantity));
      Alert.alert('Success', 'Item quantity has been updated.');
    } else {
      await dispatch(addToCart(data));
      Alert.alert('Success', 'Item has successfully added to cart.');
    }
  };

  return (
    <View style={[GlobalStyles.horizontalCenter, styles.wrapper]}>
      <Image source={image} style={styles.image} />
      <View style={styles.desc}>
        <Text style={[GlobalStyles.subTitleText, {color: colors.bluePurple}]}>
          {name}
        </Text>
        <Text style={[GlobalStyles.bodyText, {color: colors.gray59}]}>
          {description}
        </Text>
        <Text style={[GlobalStyles.semiBodyText, {marginTop: 5}]}>
          LKR {price}
        </Text>
        <View
          style={[
            GlobalStyles.horizontalCenter,
            {marginTop: 10, justifyContent: 'space-between'},
          ]}>
          <Button
            text="-"
            backgroundColor={colors.white}
            fontColor={colors.black}
            containerStyle={styles.buttonQuantity}
            textStyle={{fontSize: 20}}
            onPress={() => substractQuantity(quantity)}
          />
          <Text style={GlobalStyles.semiBodyText}>{quantity}</Text>
          <Button
            text="+"
            backgroundColor={colors.white}
            fontColor={colors.black}
            containerStyle={styles.buttonQuantity}
            textStyle={{fontSize: 20}}
            onPress={() => addQuantity(quantity)}
          />
          <Button
            text="Add to Cart"
            containerStyle={styles.buttonCart}
            textStyle={{fontSize: 16}}
            disabled={disableCart}
            onPress={handleAddToCart}
          />
        </View>
      </View>
    </View>
  );
};

export default MenuListItem;
