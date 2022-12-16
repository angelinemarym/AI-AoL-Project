import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import styles from './MenuList.styles';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import {Header, MenuListItem} from '../../components';

const MenuList = ({route, navigation}) => {
  const {data, title} = route.params;

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
