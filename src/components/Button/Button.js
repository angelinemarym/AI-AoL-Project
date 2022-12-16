import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Button.styles';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import colors from '../../utils/colors';

const Button = ({
  onPress,
  backgroundColor,
  fontColor,
  text,
  containerStyle,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : disabled
            ? colors.gray59
            : colors.bluePurple,
        },
        containerStyle,
      ]}
      onPress={disabled ? () => {} : onPress}
      activeOpacity={disabled ? 1 : 0.5}>
      <Text
        style={[
          GlobalStyles.subTitleText,
          {color: fontColor ? fontColor : colors.white},
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
