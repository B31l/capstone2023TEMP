import React from 'react';
// import { StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import HeaderWidget from './HeaderWidget';
// import { useNavigation } from '@react-navigation/native';

function GoAlert() {
  return (
    <Pressable
      onPress={() => {
        console.log('알람 창으로 이동');
      }}>
      <HeaderWidget iconName="https://cdn.icon-icons.com/icons2/2346/PNG/512/bell_alarm_icon_142909.png" />
    </Pressable>
  );
}

export default GoAlert;
