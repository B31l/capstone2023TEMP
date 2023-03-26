import React from 'react';
import { StyleSheet } from 'react-native';
import { View, TextInput } from 'react-native';
import { useState } from 'react';

function SearchInput() {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={onChangeText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 96,
    paddingTop: 48,
    paddingHorizontal: 16,
    backgroundColor: '#fafafa',
  },
  input: {
    padding: 8,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    width: '100%',
    height: 40,
  },
});

export default SearchInput;

// 맞다 키보드 올라오는거 문제해결하삼
