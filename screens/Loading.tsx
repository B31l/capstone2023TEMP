import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, Text } from 'react-native';
import { Container } from '../styles/Custom';

export default function Loading() {
  return (
    <Container>
      <Image source={require('../assets/images/loading.jpg')} />
      <Text style={styles.text}>가치가</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    fontWeight: '900',
    color: 'black',
  },
});
