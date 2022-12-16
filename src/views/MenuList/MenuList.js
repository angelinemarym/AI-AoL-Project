import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './MenuList.styles';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import {Header} from '../../components';

const MenuList = ({route, navigation}) => {
  const {data, title} = route.params;

  return (
    <View style={GlobalStyles.wrapper}>
      <Header title={title} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MenuList;
