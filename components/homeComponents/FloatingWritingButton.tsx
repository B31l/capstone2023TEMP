import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Image, Animated, Pressable } from 'react-native';

interface IFloatingWritingButton {
  hidden: boolean;
}

export default function FloatingWritingButton({ hidden }: IFloatingWritingButton) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Search' as never);
  };

  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(animation, {
      toValue: hidden ? 1 : 0,
      useNativeDriver: true,
      tension: 45,
      friction: 5,
    }).start();
  }, [animation, hidden]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 80],
              }),
            },
          ],
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ]}>
      <Pressable onPress={onPress}>
        <Image
          style={styles.image}
          source={{ uri: 'https://cdn.icon-icons.com/icons2/3887/PNG/512/pen_pencil_icon_245802.png' }}
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#7286D3',
    opacity: 0.75,
  },
  image: {
    width: 32,
    height: 32,
    // color: 'white',
  },
});
