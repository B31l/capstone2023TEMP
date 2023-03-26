import React from 'react';
// import { StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import HeaderWidget from './HeaderWidget';
// import { useNavigation } from '@react-navigation/native';

function SetClean() {
  return (
    <Pressable
      onPress={() => {
        console.log('삭제: 채팅 기록');
      }}>
      <HeaderWidget iconName="https://cdn.icon-icons.com/icons2/2346/PNG/512/trash_delete_remove_icon_142855.png" />
    </Pressable>
  );
}

export default SetClean;
