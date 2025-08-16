// Copyright (c) 2022 - 2025 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import BinaryClockScreen from './pages/BinaryClockScreen';
import { KeepAwake } from '@thehale/react-native-keep-awake';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { init } from './init';

function App() {
  const [initialized, setInitialized] = useState(false);
  init().then(() => setInitialized(true))
  return initialized && (
    <>
      <StatusBar hidden={true} />
      <KeepAwake />
      <BinaryClockScreen />
    </>
  );
};

export default App;
