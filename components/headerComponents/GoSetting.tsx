import React from 'react';
// import { StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import HeaderWidget from './HeaderWidget';
// import { useNavigation } from '@react-navigation/native';

export default function GoSetting() {
  return (
    <Pressable
      onPress={() => {
        console.log('설정으로 이동');
      }}>
      <HeaderWidget iconName="https://cdn.icon-icons.com/icons2/3887/PNG/512/setting_settings_icon_245775.png" />
    </Pressable>
  );
}
