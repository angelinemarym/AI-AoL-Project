import {View, Text} from 'react-native';
import React from 'react';
import styles from './MenuTypes.styles';
import GlobalStyles from '../../utils/styles/GlobalStyles';

const MenuTypes = ({name, icon}) => {
  return (
    <>
      <View style={styles.gap} />
      <View style={styles.wrapper}>
        <View>{icon}</View>
        <Text style={[GlobalStyles.bodyText, styles.name]}>{name}</Text>
      </View>
      {name == 'Fast Food' && <View style={styles.gap} />}
    </>
  );
};

export default MenuTypes;
