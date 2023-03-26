import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './MainTab';
import LogInScreen from './Stacks/LogInScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
      <Stack.Screen name="LogInScreen" component={LogInScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default RootStack;
