import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import GoAlert from './headerComponents/GoAlert';
import GoCategories from './headerComponents/GoCategories';
import GoSearch from './headerComponents/GoSearch';
import GoAddress from './headerComponents/GoAddress';
import GoSetting from './headerComponents/GoSetting';
import SetClean from './headerComponents/SetClean';

interface IHeader {
  tab: string;
}

export default function Header({ tab }: IHeader) {
  switch (tab) {
    case 'Home':
      return (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <GoAddress />
            <View style={styles.sep} />

            <View style={styles.widgetWrapper}>
              {/* <GoCategories /> */}
              <GoSearch />
              <View style={styles.sep} />
              <GoAlert />
            </View>
          </View>
        </View>
      );
    case 'Chat':
      return (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Text style={styles.headerTitle}>채팅</Text>
            {/* <View style={styles.widgetWrapper}>
              <SetClean />
              <View style={styles.sep} />
              <GoAlert />
            </View> */}
          </View>
        </View>
      );
    case 'My': {
      return (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Text style={styles.headerTitle}>마이공구</Text>
            <View style={styles.widgetWrapper}>
              <GoSetting />
            </View>
          </View>
        </View>
      );
    }
    default: {
      return (
        <View style={styles.container}>
          <Text style={styles.headerTitle}>{tab}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 80,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderBottomColor: '#7286D3',
    backgroundColor: '#fff',
  },
  widgetWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#4D4D4D',
    fontSize: 24,
    fontWeight: '900',
  },
  sep: {
    width: 16,
  },
});
