import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';

interface IBanner {
  hidden: boolean;
}

export default function Banner({ hidden }: IBanner) {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: hidden ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [animation, hidden]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [160, 0],
          }),
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ]}>
      <Text>배너입니다.</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7286D3',
  },
});
