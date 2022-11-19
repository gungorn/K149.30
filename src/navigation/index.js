import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { LoginStack } from '~/navigation/stacks/loginStack';
import { MainStack } from '~/navigation/stacks/mainStack';

const Navigation = props => {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};

export { Navigation };
