import React from 'react';
import { Pressable } from 'react-native';
import HeaderWidget from './HeaderWidget';
import { useNavigation } from '@react-navigation/native';

export default function GoSearch() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Search' as never);
      }}>
      <HeaderWidget iconName="https://cdn.icon-icons.com/icons2/3887/PNG/512/search_magnifyng_glass_icon_245781.png" />
    </Pressable>
  );
}
