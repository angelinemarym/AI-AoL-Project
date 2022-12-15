import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './CustomTabBar.styles';
import TabItem from './TabItem';
import colors from '../../utils/colors';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            active={isFocused}
            title={label}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};

export default CustomTabBar;
