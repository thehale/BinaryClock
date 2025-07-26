// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import BinaryClockScreen from './src/pages/BinaryClockScreen';
import BootSplash from 'react-native-bootsplash';
import { KeepAwake } from '@thehale/react-native-keep-awake';
import React from 'react';
import { StatusBar } from 'react-native';

const App = () => {
  BootSplash.hide({fade: true});
  return (
    <>
      <StatusBar hidden={true} />
      <KeepAwake />
      <BinaryClockScreen />
    </>
  );
};

export default App;
