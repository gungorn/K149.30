import React from 'react';
import { View } from 'react-native';

import { Navigation } from '~/navigation';

const App = props => {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
};

export { App };
