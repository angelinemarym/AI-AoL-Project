import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ViewAll.styles';
import GlobalStyles from '../../utils/styles/GlobalStyles';

const ViewAll = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Text style={[GlobalStyles.bodyText, styles.text]}>View All</Text>
    </TouchableOpacity>
  );
};

export default ViewAll;
