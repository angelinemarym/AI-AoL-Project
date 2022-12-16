import {ImageBackground, Text, View} from 'react-native';
import React from 'react';
import styles from './Splash.styles';
import {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('MainApp'), 2000);
  }, [navigation]);

  return (
    <>
      <ImageBackground
        source={require('../../assets/images/splash-background.png')}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.transparentBackground} />
        <Text style={styles.titleText}>FOOD</Text>
        <Text style={styles.titleText}>DELIVERY</Text>
      </ImageBackground>
    </>
  );
};

export default Splash;
