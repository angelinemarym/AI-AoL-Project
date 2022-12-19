import {View, Text, FlatList, ScrollView, NativeModules} from 'react-native';
import React, {useEffect} from 'react';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import styles from './Home.styles';
import {IconSideMenu} from '../../assets/icons';
import {MenuItem, MenuTypes, SearchBar, ViewAll} from '../../components';
import {useState} from 'react';
import menuTypes from '../../assets/data/MenuTypes.data';
import {fastFoodOffers, popularFood} from '../../assets/data/Food.data';

const Home = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const {AlanManager} = NativeModules;

  const greeting = async () => {
    await AlanManager.activate();
    AlanManager.playText(
      'Welcome to Food Delivery app. Would you like to try our popular food?',
    );
  };

  useEffect(() => {
    greeting();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      AlanManager.setVisualState({
        screen: 'Home',
        popularMenu: popularFood,
        fastFoodMenu: fastFoodOffers,
      });
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView
      style={GlobalStyles.wrapper}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <IconSideMenu />
        <SearchBar text={text} onChangeText={onChangeText} />
      </View>
      <View style={styles.gap} />
      <View style={GlobalStyles.horizontalCenter}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={menuTypes}
          renderItem={({item}) => (
            <MenuTypes icon={item.icon} name={item.name} />
          )}
        />
      </View>
      <View style={styles.gap} />
      <View style={[GlobalStyles.horizontalCenter, styles.foodSection]}>
        <Text style={GlobalStyles.titleText}>Popular Food</Text>
        <ViewAll
          onPress={() =>
            navigation.navigate('MenuList', {
              data: popularFood,
              title: 'Popular Food',
            })
          }
        />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popularFood}
        renderItem={({item}) => <MenuItem {...item} />}
      />
      <View style={styles.gap} />
      <View style={[GlobalStyles.horizontalCenter, styles.foodSection]}>
        <Text style={GlobalStyles.titleText}>Fast Food Offers</Text>
        <ViewAll
          onPress={() =>
            navigation.navigate('MenuList', {
              data: fastFoodOffers,
              title: 'Fast Food',
            })
          }
        />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={fastFoodOffers}
        renderItem={({item}) => <MenuItem {...item} />}
      />
      <View style={{height: 64}} />
    </ScrollView>
  );
};

export default Home;
