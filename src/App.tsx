// Copyright (c) 2022 - 2025 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import BinaryClockScreen from './pages/BinaryClockScreen';
import { KeepAwake } from '@thehale/react-native-keep-awake';
import { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { init } from './init';

function App() {
  const [initialized, setInitialized] = useState(false);
  init().then(() => setInitialized(true))
  return initialized && (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
      <KeepAwake />
      <SafeInsetView>
        <BinaryClockScreen />
      </SafeInsetView>
    </SafeAreaProvider>
  );
};

function SafeInsetView({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  const insetStyles = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  }
  return <View style={[styles.safeArea, insetStyles]}>
    {children}
  </View>;
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: 'black' },
})

export default App;
