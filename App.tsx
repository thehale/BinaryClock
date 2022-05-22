// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BinaryClockScreen from './src/pages/BinaryClockScreen';
import BinaryClockSettingsScreen from './src/pages/BinaryClockSettingsScreen';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
