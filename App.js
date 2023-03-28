/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Platform, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator, {navigationRef} from './src/navigator';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode, Platform.OS == 'ios' ? 'ios' : 'android');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#212352' : Colors.lighter,
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
