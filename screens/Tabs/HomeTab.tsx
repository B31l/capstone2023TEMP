import React from 'react';
import styles from '../../styles/styles';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import Header from '../../components/Header';
import HomeList from '../../components/homeComponents/HomeList';
import WriteButton from '../../components/homeComponents/WriteButton';

export default function HomeTab() {
  return (
    <View>
      <Header tab="Home" />
      <View style={[styles.container, cstyle.container]}>
        <HomeList />
      </View>
      <WriteButton />
    </View>
  );
}

const cstyle = StyleSheet.create({
  container: {
    paddingBottom: 160,
  },
});
