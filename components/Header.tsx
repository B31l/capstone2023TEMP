import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import GoAlert from './headerComponents/GoAlert';
import GoCategories from './headerComponents/GoCategories';
import GoAddress from './headerComponents/GoAddress';
import GoSetting from './headerComponents/GoSetting';
import SetClean from './headerComponents/SetClean';

interface IHeader {
  tab: string;
}

function Header({ tab }: IHeader) {
  switch (tab) {
    case 'Home':
      return (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <GoAddress />
            <View style={styles.widgetWrapper}>
              <GoCategories />
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
            <View style={styles.widgetWrapper}>
              <SetClean />
              <View style={styles.sep} />
              <GoAlert />
            </View>
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
    paddingTop: 48,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // borderBottomWidth: 1,
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
    fontWeight: 'bold',
  },
  sep: {
    width: 8,
  },
});

export default Header;
