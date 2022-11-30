import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';
import {Provider} from 'react-redux';
import Router from './src/routes/Router';
import {store, persistor} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import {AlanView} from '@alan-ai/alan-sdk-react-native';
import {ALAN_AI_SDK_KEY} from './src/utils/constants';

const App: () => Node = () => {
  const {AlanManager, AlanEventEmitter} = NativeModules;
  const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);
  const subscription = alanEventEmitter.addListener('command', data => {
    console.log(`got command event ${JSON.stringify(data)}`);
  });

  useEffect(() => {
    subscription.remove();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
      <AlanView projectid={ALAN_AI_SDK_KEY} />
    </Provider>
  );
};

export default App;
