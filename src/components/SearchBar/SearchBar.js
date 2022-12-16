import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './SearchBar.styles';
import {IconSearch} from '../../assets/icons';

const SearchBar = ({text, onChangeText}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        value={text}
        onChangeText={onChangeText}
        placeholder="What are you looking for?"
        style={styles.textInput}
      />
      <View style={styles.searchIconWrapper}>
        <IconSearch />
      </View>
    </View>
  );
};

export default SearchBar;
