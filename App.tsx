// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import BinaryClockScreen from './src/pages/BinaryClockScreen';
import BinaryClockSettingsScreen from './src/pages/BinaryClockSettingsScreen';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import React from 'react';
import Toast from 'react-native-toast-message';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({fade: true, duration: 500})}>
      <Stack.Navigator>
        <Stack.Screen
          name="BinaryClockScreen"
          component={BinaryClockScreen}
          options={{
            title: 'Binary Clock',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BinaryClockSettingsScreen"
          component={BinaryClockSettingsScreen}
          options={{
            title: 'Binary Clock Settings',
          }}
        />
      </Stack.Navigator>
      <Toast position={'bottom'} />
    </NavigationContainer>
  );
};

export default App;
