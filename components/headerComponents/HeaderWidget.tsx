import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

interface IHeaderWidget {
  iconName: string;
}

function HeaderWidget({ iconName }: IHeaderWidget) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: iconName }} />
      {/* <Icon name={iconName} color="black" size={32} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    // marginLeft: 8,
  },
  image: {
    width: 32,
    height: 32,
  },
});

export default HeaderWidget;
