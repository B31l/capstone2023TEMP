import React from 'react';
// import { StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import HeaderWidget from './HeaderWidget';
// import { useNavigation } from '@react-navigation/native';

function GoSetting() {
  return (
    <Pressable
      onPress={() => {
        console.log('설정으로 이동');
      }}>
      <HeaderWidget iconName="https://cdn.icon-icons.com/icons2/2346/PNG/512/settings_filled_icon_142864.png" />
    </Pressable>
  );
}

export default GoSetting;
