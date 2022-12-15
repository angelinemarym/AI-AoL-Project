import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import styles from './Home.styles';
import {IconSideMenu} from '../../assets/icons';
import {MenuItem, MenuTypes, SearchBar, ViewAll} from '../../components';
import {useState} from 'react';
import menuTypes from '../../assets/data/MenuTypes.data';
import {fastFoodOffers, popularFood} from '../../assets/data/Food.data';

const Home = () => {
  const [text, onChangeText] = useState('');
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
        <ViewAll />
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
        <ViewAll />
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
