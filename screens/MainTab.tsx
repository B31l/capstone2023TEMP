import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeTab from './Tabs/HomeTab';
import ChatTab from './Tabs/ChatTab';
import MyTab from './Tabs/MyTab';
import SearchTab from './Tabs/SearchTab';

interface IconProps {
  color: string;
}

const Tab = createBottomTabNavigator();

export default function MainTab() {
  const screenOptions = {
    tabBarActiveTintColor: '#7286D3',
    tabBarInactiveTintColor: '#777',
    tabBarLabelStyle: {
      fontSize: 12,
    },
    tabBarStyle: {
      height: 48,
      paddingHorizontal: 32,
      backgroundColor: '#fafafa',
    },
    tabBarShowLabel: false,
  };

  const headerOptions = (iconName: string) => ({
    headerShown: false,
    tabBarIcon: ({ color }: IconProps) => <Icon name={iconName} color={color} size={32} />,
  });

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeTab} options={headerOptions('shopping-bag')} />
      <Tab.Screen name="Search" component={SearchTab} options={headerOptions('search')} />
      <Tab.Screen name="Chat" component={ChatTab} options={headerOptions('chat')} />
      <Tab.Screen name="My" component={MyTab} options={headerOptions('person')} />
    </Tab.Navigator>
  );
}
