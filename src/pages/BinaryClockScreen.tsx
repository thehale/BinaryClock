// Copyright (c) 2022 - 2025 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions
} from 'react-native';
import React, { useCallback, useState } from 'react';

import AutoOrientingClock from '../components/AutoOrientingClock';
import SettingsScrollView from '../components/settings/SettingsScrollView';

function BinaryClockScreen() {
  const [settingsVisibility, toggleSettingsVisibility] = useSettingsVisibility();

  const { height, width } = useWindowDimensions();
  const flexStyle = { flexDirection: height > width ? 'column' : 'row' } as const

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, flexStyle]}>
        <Pressable style={styles.clock} onPress={toggleSettingsVisibility}>
          <AutoOrientingClock lastAspectUpdate={settingsVisibility.updated} />
        </Pressable>
        {settingsVisibility.value && (
          <View style={styles.settings}>
            <SettingsScrollView />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

function useSettingsVisibility() {
  const [visibility, setVisibility] = useState<{
    value: boolean;
    updated: Date;
  }>({ value: false, updated: new Date() });
  const toggleVisibility = useCallback(
    () => setVisibility({ value: !visibility.value, updated: new Date() }),
    [visibility],
  );
  return [visibility, toggleVisibility] as const;
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: 'black' },
  container: { height: '100%' },
  clock: { flex: 5 },
  settings: { flex: 2 },
});

export default BinaryClockScreen;
