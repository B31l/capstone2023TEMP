import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function WriteButton() {
  return (
    <View style={styles.container}>
      <Icon name="add" color="white" size={48} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 32,
    bottom: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
  },
});

export default WriteButton;
