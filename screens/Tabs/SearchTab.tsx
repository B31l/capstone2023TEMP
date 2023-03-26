import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';
import SearchInput from '../../components/searchComponents/SearchInput';

function SearchTab() {
  return (
    <View style={styles.container}>
      <SearchInput />
      <Text>검색</Text>
    </View>
  );
}

export default SearchTab;
