import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './MainTab';
import LogInScreen from './Stacks/LogInScreen';
import SearchScreen from './Stacks/SearchScreen';
import SetAddressScreen from './Stacks/SetAddressScreen';
import Loading from './Loading';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  const options = { headerShown: false };

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen name="MainTab" component={MainTab} options={options} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} options={options} />
        <Stack.Screen name="Search" component={SearchScreen} options={options} />
        <Stack.Screen name="SetAddressScreen" component={SetAddressScreen} options={options} />
      </Stack.Navigator>
    );
  }
}
