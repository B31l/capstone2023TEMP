import React, { useState } from 'react';
import styles from '../../styles/styles';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import Header from '../../components/Header';
import HomeList from '../../components/homeComponents/HomeList';
import Banner from '../../components/homeComponents/Banner';
import HomeMenu from '../../components/homeComponents/HomeMenu';
import FloatingWritingButton from '../../components/homeComponents/FloatingWritingButton';

interface IOnScrolled {
  banner?: boolean;
  floatingWritingButton?: boolean;
}
export default function HomeTab() {
  const [hidden, setHidden] = useState({
    banner: false,
    floatingWritingButton: false,
  });

  // 아래 코드를 조금 더 간결화시키는 방법을 생각 중...
  const onScrolled = (component: string, state: boolean) => {
    if (component === 'banner') {
      if (hidden.banner !== state) {
        setHidden((prevState) => {
          return { ...prevState, banner: state };
        });
      }
    } else if (component === 'floatingWritingButton') {
      if (hidden.floatingWritingButton !== state) {
        setHidden((prevState) => {
          return { ...prevState, floatingWritingButton: state };
        });
      }
    }
  };

  return (
    <View style={[styles.container, cstyle.container]}>
      <Header tab="Home" />
      <Banner hidden={hidden.banner} />
      <HomeMenu />
      <View style={cstyle.container}>
        <HomeList onScrolled={onScrolled} />
      </View>
      <FloatingWritingButton hidden={hidden.floatingWritingButton} />
    </View>
  );
}

const cstyle = StyleSheet.create({
  container: {
    marginBottom: 128,
  },
});
