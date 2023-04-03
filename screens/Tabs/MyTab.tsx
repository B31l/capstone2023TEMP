import React from 'react';
import styles from '../../styles/styles';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import Header from '../../components/Header';
import Profile from '../../components/myComponents/Profille';
import MyOption from '../../components/myComponents/MyOption';

export default function MyTab() {
  return (
    <View>
      <Header tab="My" />
      <View style={styles.container}>
        <Profile id="ffcc33" />
        <View style={my.wrapper}>
          <View style={my.horizontal} />
          <MyOption name="관심" image="favorite-border" />
          {/* <MyOption name="결제수단" image="credit-card" /> */}
          <MyOption name="거래 내역" image="article" />
          <MyOption name="알림 설정" image="notifications-none" />
          <MyOption name="통계" image="equalizer" />

          {/* <View style={my.horizontal} />
          <MyOption name="친구" image="group" />
          <MyOption name="블랙리스트" image="block" />
          <MyOption name="초대" image="mail-outline" /> */}

          <View style={my.horizontal} />
          <MyOption name="자주 묻는 질문" image="question-answer" />
          <MyOption name="앱 정보" image="info" />
        </View>
      </View>
    </View>
  );
}

const my = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
  },
  horizontal: {
    height: 16,
    // backgroundColor: 'red',
  },
});
