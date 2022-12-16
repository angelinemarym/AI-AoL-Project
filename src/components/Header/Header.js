import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Header.styles';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import {IconBack} from '../../assets/icons';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress}>
        <IconBack />
      </TouchableOpacity>
      <Text style={[GlobalStyles.titleText, {flex: 1, textAlign: 'center'}]}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
