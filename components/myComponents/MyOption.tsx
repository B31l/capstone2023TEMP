import React from 'react';
import { StyleSheet } from 'react-native';
import { Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IMyOption {
  name: string;
  image: string;
  nav?: string;
}

export default function MyOption({ name, image, nav = 'LogInScreen' }: IMyOption) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate(nav as never);
      }}>
      <Icon name={image} color="black" size={32} />
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,

    // backgroundColor: 'red',
  },
  text: {
    marginLeft: 8,
    color: 'black',
    fontSize: 16,
  },
});
