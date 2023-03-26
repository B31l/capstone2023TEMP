import React from 'react';
// import { StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import HeaderWidget from './HeaderWidget';
// import { useNavigation } from '@react-navigation/native';

function GoLocation() {
  return (
    <Pressable
      onPress={() => {
        console.log('위치 설정');
      }}>
      <HeaderWidget iconName="https://cdn.icon-icons.com/icons2/2346/PNG/512/marker_placeholder_location_pin_icon_142928.png" />
    </Pressable>
  );
}

export default GoLocation;
