import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, View } from 'react-native';
import HomeListItem from './HomeListItem';

interface IData {
  id: number;
  title: string;
  UidList: string[];
  latestData: string;
  latestLog: string;
}

interface IRenderItem {
  item: IData;
}

interface IHomeList {
  onScrolled(component: string, state: boolean): void;
}

const renderItem = ({ item }: IRenderItem) => {
  return (
    <View style={styles.flatList}>
      <HomeListItem title={item.title} UidList={item.UidList} latestDate={item.latestData} latestLog={item.latestLog} />
    </View>
  );
};

export default function HomeList({ onScrolled }: IHomeList) {
  const onScroll = (e: any) => {
    const { contentSize, layoutMeasurement, contentOffset } = e.nativeEvent;

    // 아래 코드를 조금 더 간결화시키는 방법을 생각 중...
    // 배너 숨기기
    const distanceFromTop = contentOffset.y;
    if (distanceFromTop) {
      onScrolled('banner', true);
    } else {
      onScrolled('banner', false);
    }
    // 글쓰기 버튼 숨기기
    const distanceFromBottom = contentSize.height - layoutMeasurement.height - contentOffset.y;
    if (distanceFromBottom < 72) {
      onScrolled('floatingWritingButton', true);
    } else {
      onScrolled('floatingWritingButton', false);
    }
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => String(item.id)} onScroll={onScroll} />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    marginBottom: 8,
    paddingHorizontal: 16,
    flex: 1,
  },
});

const data: IData[] = [
  {
    id: 1,
    title: '두루마리 휴지 90롤',
    UidList: ['eee', 'ddd', 'ccc'],
    latestData: '5분전',
    latestLog: '5000원',
  },
  {
    id: 2,
    title: '야식',
    UidList: ['ddd', 'ccc', 'bbb'],
    latestData: '어제',
    latestLog: '5000원',
  },
  {
    id: 3,
    title: '물',
    UidList: ['ccc', 'eee'],
    latestData: '2023-03-22',
    latestLog: '5000원',
  },
  {
    id: 4,
    title: '김치',
    UidList: ['bbb'],
    latestData: '2023-03-21',
    latestLog: '5000원',
  },
  {
    id: 5,
    title: '물',
    UidList: ['aaa'],
    latestData: '2023-03-20',
    latestLog: '5000원',
  },
  {
    id: 6,
    title: '햇반',
    UidList: ['999'],
    latestData: '2023-01-22',
    latestLog: '5000원',
  },
  {
    id: 7,
    title: '시리얼',
    UidList: ['888'],
    latestData: '2022-12-29',
    latestLog: '5000원',
  },
  {
    id: 8,
    title: '끝',
    UidList: ['777'],
    latestData: '2022-05-01',
    latestLog: '5000원',
  },
];
