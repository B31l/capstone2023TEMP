import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './MainTab';
import LogInScreen from './Stacks/LogInScreen';
import SetAddressScreen from './Stacks/SetAddressScreen';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
      <Stack.Screen name="LogInScreen" component={LogInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SetAddressScreen" component={SetAddressScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
