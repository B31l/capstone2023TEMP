import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native';
import HomeListItemImages from './HometListItemImages';

interface IHomeListItem {
  title?: string; // 채팅방 제목(설정했을 경우) 또는 채팅방 참여 인원
  UidList: string[]; // 채팅방 참여자 id 목록
  latestDate: string; // 최근 채팅 날짜
  latestLog: string; // 최근 채팅 기록
  isTerminated?: Boolean;
}

export default function HomeListItem({ title, UidList, latestDate, latestLog }: IHomeListItem) {
  // 위 매개변수들은 요청한 id에 대한 response로 사용할 예정
  return (
    <View style={styles.container}>
      <HomeListItemImages UidList={UidList} />
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text>{latestDate}</Text>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{ uri: 'https://cdn.icon-icons.com/icons2/3887/PNG/512/user_icon_245743.png' }}
          />
          <Text style={styles.length}>{UidList.length}인</Text>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{ uri: 'https://cdn.icon-icons.com/icons2/3887/PNG/512/drawer_icon_245868.png' }}
            resizeMode="contain"
          />
          <Text style={styles.length}>{latestLog}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 128,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
  },
  right: {
    flex: 1,
    marginTop: 4,
  },
  rightChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 24,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
    marginRight: 8,
  },
  date: {
    fontSize: 16,
    marginRight: 8,
  },
  do: {
    color: '#7286D3',
  },
  done: {
    color: '#777',
  },
  image: {
    width: 20,
    height: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  length: {
    fontSize: 16,
    fontWeight: '900',
    marginLeft: 4,
  },
});
