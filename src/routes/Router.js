import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from '../utils/colors';
import {Cart, Chat, Favorite, Home, Profile, Splash} from '../views';
import {
  IconCart,
  IconChat,
  IconFavorite,
  IconHome,
  IconProfile,
} from '../assets/icons';
import {TouchableOpacity, View} from 'react-native';
import {CustomTabBar} from '../components';

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
  return (
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
