import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '~/screens';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export { LoginStack };
