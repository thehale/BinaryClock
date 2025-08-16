// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useState} from 'react';

import BinaryClock from '../components/BinaryClock';
import Orientation from '../utils/orientation';
import SettingBoolean from '../components/settings/SettingBoolean';
import SettingRange from '../components/settings/SettingRange';
import { useSettings } from '../settings/useSettings';

const BinaryClockScreen: React.FC = () => {
  const [showSettings, setShowSettings] = useState<{
    value: boolean;
    updated: Date;
  }>({value: false, updated: new Date()});
  const toggleSettings = useCallback(
    () => setShowSettings({value: !showSettings.value, updated: new Date()}),
    [showSettings],
  );
  const {height, width} = useWindowDimensions();
  const [settings, updateSetting] = useSettings('BinaryClockScreen');
  const brightnessString = `${Math.round(settings.brightness * 100)}%`;
  const roundnessString = `${Math.round(settings.roundness * 100)}%`;
  return (
    <SafeAreaView>
      <View
        style={[
          styles.container,
          // eslint-disable-next-line react-native/no-inline-styles
          {flexDirection: height > width ? 'column' : 'row'},
        ]}>
        <Pressable style={styles.clockPreview} onPress={toggleSettings}>
          <Clock
            lastAspectUpdate={showSettings.updated}
            brightness={settings.brightness}
            roundness={settings.roundness}
            showHints={settings.showHints}
          />
        </Pressable>
        {showSettings.value && (
          <ScrollView
            style={styles.settingsContainer}
            contentContainerStyle={styles.settingsContentContainer}>
            <SettingRange
              title="Brightness"
              initialValue={settings.brightness}
              onValueChange={value => updateSetting({brightness: value})}
              caption={brightnessString}
            />
            <SettingRange
              title="Roundness"
              initialValue={settings.roundness}
              onValueChange={value => updateSetting({roundness: value})}
              caption={roundnessString}
            />
            <SettingBoolean
              title="Show Hints"
              subtitle="Show each dot's value."
              onValueChange={value => updateSetting({showHints: value})}
              initialValue={settings.showHints}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

function Clock({
  brightness,
  roundness,
  showHints,
  lastAspectUpdate,
}: {
  brightness: number;
  roundness: number;
  showHints: boolean;
  lastAspectUpdate: Date;
}) {
  const [layout, setLayout] = useState({
    height: 0,
    width: 0,
    date: new Date(0),
  });
  const showClock =
    layout.height > 0 &&
    layout.width > 0 &&
    layout.date.getTime() > lastAspectUpdate.getTime();
  const orientation =
    layout.height > layout.width ? Orientation.Portrait : Orientation.Landscape;
  return (
    <View
      onLayout={({nativeEvent}) => {
        setLayout({
          height: nativeEvent.layout.height,
          width: nativeEvent.layout.width,
          date: new Date(),
        });
      }}>
      {!showClock ? (
        <View style={styles.blankClock} />
      ) : (
        <BinaryClock
          orientation={orientation}
          brightness={brightness}
          roundness={roundness}
          showHints={showHints}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  clockPreview: {
    flex: 2,
  },
  blankClock: {
    height: '100%',
    backgroundColor: 'black',
  },
  settingsContainer: {
    flex: 3,
  },
  settingsContentContainer: {
    padding: 20,
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
});

export default BinaryClockScreen;
