import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';
import SearchInput from '../../components/searchComponents/SearchInput';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchInput />
      <Text>검색</Text>
    </View>
  );
}
