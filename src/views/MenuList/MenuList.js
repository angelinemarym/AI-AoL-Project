import {View, Text, ScrollView, FlatList, NativeModules} from 'react-native';
import React from 'react';
import styles from './MenuList.styles';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import {Header, MenuListItem} from '../../components';

const MenuList = ({route, navigation}) => {
  const {data, title} = route.params;
  const {AlanManager} = NativeModules;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      AlanManager.setVisualState({screen: 'MenuList', menu: data});
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={GlobalStyles.wrapper}>
      <Header title={title} onPress={() => navigation.goBack()} />
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <MenuListItem {...item} />}
      />
    </View>
  );
};

export default MenuList;
