import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeListItemImages from './HometListItemImages';

interface IHomeListItem {
  title?: string; // 채팅방 제목(설정했을 경우) 또는 채팅방 참여 인원
  UidList: string[]; // 채팅방 참여자 id 목록
  latestDate: string; // 최근 채팅 날짜
  latestLog: string; // 최근 채팅 기록
  isTerminated?: Boolean;
}

export default function HomeListItem({ title, UidList, latestDate, latestLog, isTerminated }: IHomeListItem) {
  // 위 매개변수들은 요청한 id에 대한 response로 사용할 예정
  return (
    <View style={styles.container}>
      <HomeListItemImages UidList={UidList} />
      <View style={styles.right}>
        <View style={styles.rightChild}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text>{UidList.length}</Text>
          </View>
          <View style={styles.titleWrapper}>
            <Text style={[styles.date, isTerminated ? styles.done : styles.do]}>{latestDate}</Text>

            <Icon
              name={isTerminated ? 'check-box' : 'check-box-outline-blank'}
              size={24}
              color={isTerminated ? '#777' : '#7286D3'}
            />
          </View>
        </View>
        <View style={styles.rightChild}>
          <Text>{latestLog}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 160,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
  },
  right: {
    flex: 1,
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
    fontSize: 16,
    fontWeight: 'bold',
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
});
