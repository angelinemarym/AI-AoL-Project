import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {
  IconCart,
  IconChat,
  IconFavorite,
  IconHome,
  IconProfile,
} from '../../assets/icons';
import {useSelector} from 'react-redux';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const cart = useSelector(state => state.reducerOrder.cart);
  const Icon = () => {
    if (title === 'Home') {
      return <IconHome fill={active ? colors.bluePurple : colors.gray} />;
    }
    if (title === 'Favorite') {
      return <IconFavorite fill={active ? colors.bluePurple : colors.gray} />;
    }
    if (title === 'Cart') {
      return (
        <View
          style={{
            backgroundColor: colors.white,
            height: 65,
            width: 65,
            borderRadius: 65 / 2,
            position: 'absolute',
            bottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconCart fill={active ? colors.bluePurple : colors.gray} />
          {cart.length > 0 && (
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 20 / 2,
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: colors.red,
              }}
            />
          )}
        </View>
      );
    }
    if (title === 'Chat') {
      return <IconChat fill={active ? colors.bluePurple : colors.gray} />;
    }
    return <IconProfile fill={active ? colors.bluePurple : colors.gray} />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
