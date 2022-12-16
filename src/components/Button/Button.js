import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Button.styles';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import colors from '../../utils/colors';

const Button = ({onPress, backgroundColor, fontColor, text}) => {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : colors.bluePurple,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          GlobalStyles.subTitleText,
          {color: fontColor ? fontColor : colors.white},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
