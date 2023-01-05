import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from '../utils/colors';
import {Cart, Chat, Favorite, Home, Profile, Splash, MenuList} from '../views';
import {
  IconCart,
  IconChat,
  IconFavorite,
  IconHome,
  IconProfile,
} from '../assets/icons';
import {
  TouchableOpacity,
  View,
  NativeEventEmitter,
  NativeModules,
  Alert,
} from 'react-native';
import {CustomTabBar} from '../components';
import {AlanView} from '@alan-ai/alan-sdk-react-native';
import {ALAN_AI_SDK_KEY} from '../utils/constants';
import React, {useEffect, useCallback} from 'react';
import {navigationRef} from './RootNavigation';
import * as RootNavigation from './RootNavigation';
import {
  combineFood,
  fastFoodOffers,
  popularFood,
} from '../assets/data/Food.data';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  updateItemQuantity,
} from '../redux/actions/actionOrder';
import {useState} from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.darkBlue,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const Router = () => {
  const {AlanManager, AlanEventEmitter} = NativeModules;
  const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.reducerOrder.cart);

  const addItem = useCallback(async (name, quantity) => {
    const food = combineFood?.find(i => i.name == name);
    await AlanManager.activate();
    if (food == null) {
      AlanManager.playText(`Sorry, we cannot find ${name} on the menu`);
    } else {
      const data = {
        id: food.id,
        name: food.name,
        quantity,
        price: food.price,
        restaurantName: food.restaurantName,
      };

      if (cart.some(item => item.id == data.id)) {
        await dispatch(updateItemQuantity(id, quantity));
        Alert.alert('Success', 'Item quantity has been updated.');
      } else {
        await dispatch(addToCart(data));
        Alert.alert('Success', 'Item has successfully added to cart.');
        AlanManager.playText(`Added ${quantity} ${name} on the cart`);
      }
    }
  });

  useEffect(() => {
    alanEventEmitter.addListener('command', data => {
      if (data.command == 'openPopularFood') {
        RootNavigation.navigate('MenuList', {
          data: popularFood,
          title: 'Popular Food',
        });
      } else if (data.command == 'openFastFood') {
        RootNavigation.navigate('MenuList', {
          data: fastFoodOffers,
          title: 'Fast Food',
        });
      } else if (data.command == 'goBack') {
        RootNavigation.navigate('Home');
      } else if (data.command == 'openCart') {
        RootNavigation.navigate('Cart');
      } else if (data.command == 'addToCart') {
        addItem(data.payload.name, data.payload.quantity);
      }
    });
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuList"
          component={MenuList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <AlanView projectid={ALAN_AI_SDK_KEY} />
    </NavigationContainer>
  );
};

export default Router;
