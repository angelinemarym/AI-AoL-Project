import {ImageBackground, Text, View} from 'react-native';
import React from 'react';
import styles from './Splash.styles';
import {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Home'), 3000);
  }, [navigation]);

  return (
    <>
      <ImageBackground
        source={require('../../assets/images/splash-background.png')}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.transparentBackground} />
        <Text style={styles.titleText}>FOOD</Text>
        <Text style={styles.titleText}>EXPRESS</Text>
      </ImageBackground>
    </>
  );
};

export default Splash;
