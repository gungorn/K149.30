import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';

import { Navigation } from '~/navigation';

import store from '~/redux';

const App = props => {
  return (
    <View style={styles.main}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1 },
});

export { App };
