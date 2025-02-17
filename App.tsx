/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {AppNavigator} from 'navigation';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'i18n';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
