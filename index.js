import { AppRegistry } from 'react-native';
import { App } from '~/App';

if (global.HermesInternal) {
  console.log('================= HERMES ENABLED =================');
} else {
  console.log('================= HERMES DISABLED =================');
}

AppRegistry.registerComponent('k14930', () => App);
