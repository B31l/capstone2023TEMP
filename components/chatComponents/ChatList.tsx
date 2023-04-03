import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, View } from 'react-native';
import ChatListItem from './ChatListItem';

interface IData {
  id: number;
  title: string;
  UidList: string[];
  latestData: string;
  latestLog: string;
  isTerminated: boolean;
}

interface IRenderItem {
  item: IData;
}

const renderItem = ({ item }: IRenderItem) => {
  return (
    <View style={styles.container}>
      <ChatListItem
        title={item.title}
        UidList={item.UidList}
        latestDate={item.latestData}
        latestLog={item.latestLog}
        isTerminated={item.isTerminated}
      />
    </View>
  );
};

export default function ChatList() {
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => String(item.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

const data: IData[] = [
  {
    id: 1,
    title: '섬유유연제',
    UidList: ['ff33cc'],
    latestData: '5분전',
    latestLog: 'ㄱㄷ',
    isTerminated: false,
  },
  {
    id: 2,
    title: '야식',
    UidList: ['ffcc33'],
    latestData: '어제',
    latestLog: 'ㅇㅇ 님이 5,000원을 송금했습니다.',
    isTerminated: false,
  },
  {
    id: 3,
    title: '물',
    UidList: ['ccff33'],
    latestData: '2023-03-22',
    latestLog: 'ㅇㅋㅇㅋ',
    isTerminated: true,
  },
  {
    id: 4,
    title: '김치',
    UidList: ['33ffcc'],
    latestData: '2023-03-21',
    latestLog: 'ㅇㅇ 님이 5,000원을 송금했습니다.',
    isTerminated: true,
  },
  {
    id: 5,
    title: '물',
    UidList: ['33ccff'],
    latestData: '2023-03-20',
    latestLog: 'ㅇㅇ 님이 5,000원을 송금했습니다.',
    isTerminated: true,
  },
  {
    id: 6,
    title: '햇반',
    UidList: ['cc33ff'],
    latestData: '2023-01-22',
    latestLog: 'ㅇㅇ 님이 5,000원을 송금했습니다.',
    isTerminated: true,
  },
  {
    id: 7,
    title: '시리얼',
    UidList: ['777'],
    latestData: '2022-12-29',
    latestLog: 'ㅇㅇ 님이 5,000원을 송금했습니다.',
    isTerminated: true,
  },
  {
    id: 8,
    title: '끝',
    UidList: ['333'],
    latestData: '2022-05-01',
    latestLog: 'ㅇㅇ 님이 5,000원을 송금했습니다.',
    isTerminated: true,
  },
];
