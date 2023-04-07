import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import styles from '../../styles/styles';
import Header from '../../components/Header';
import ChatList from '../../components/chatComponents/ChatList';

export default function ChatTab() {
  return (
    <>
      <Header tab="Chat" />
      <View style={[styles.container, cstyle.container]}>
        <ChatList />
      </View>
    </>
  );
}

const cstyle = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
});
