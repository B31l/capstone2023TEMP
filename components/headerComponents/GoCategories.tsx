import React from 'react';
// import { StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import HeaderWidget from './HeaderWidget';
// import { useNavigation } from '@react-navigation/native';

function GoCategories() {
  return (
    <Pressable
      onPress={() => {
        console.log('카테고리 페이지로 이동한다');
      }}>
      <HeaderWidget iconName="https://cdn.icon-icons.com/icons2/2346/PNG/512/overview_menu_icon_142923.png" />
    </Pressable>
  );
}

export default GoCategories;
