import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function HomeMenu() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable}>
        <Text style={styles.text}>가치구매</Text>
      </Pressable>
      <Pressable style={styles.pressable}>
        <Text style={styles.text}>가치배달</Text>
      </Pressable>
      <Pressable style={styles.pressable}>
        <Text style={styles.text}>가치이동</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    marginHorizontal: 16,
  },
  pressable: {
    marginRight: 8,
    width: 80,
    height: 48,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
  },
});
