// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import {
  BinaryClockSettings,
  useBrightness,
  useRoundness,
  useShowHints,
} from '../utils/BinaryClockSettings';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';

import BinaryClock from '../components/BinaryClock';
import Orientation from '../utils/orientation';
import React from 'react';
import SettingBoolean from '../components/settings/SettingBoolean';
import SettingRange from '../components/settings/SettingRange';
import Toast from 'react-native-toast-message';

const BinaryClockSettingScreen: React.FC = () => {
  const {height, width} = useWindowDimensions();
  let clockOrientation =
    height > width ? Orientation.Landscape : Orientation.Portrait;
  const [brightness, setBrightness] = useBrightness();
  const brightnessString = `${Math.round(brightness * 100)}%`;
  const [roundness, setRoundness] = useRoundness();
  const roundnessString = `${Math.round(roundness * 100)}%`;
  const [showHints, setShowHints] = useShowHints();
  function saveSettings() {
    console.debug('Saving settings');
    BinaryClockSettings.setPreferences({
      brightness: brightness,
      roundness: roundness,
      showHints: showHints,
    })
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'Settings saved! 🎉',
        });
      })
      .catch(err => {
        console.error(err);
        Toast.show({
          type: 'error',
          text1: 'Settings not saved 🤔',
        });
      });
  }
  return (
    <SafeAreaView>
      <View
        style={[
          styles.container,
          // eslint-disable-next-line react-native/no-inline-styles
          {flexDirection: height > width ? 'column' : 'row'},
        ]}>
        <View style={styles.clockPreview}>
          <BinaryClock
            orientation={clockOrientation}
            brightness={brightness}
            roundness={roundness}
            showHints={showHints}
          />
        </View>
        <View style={styles.settingsContainer}>
          <SettingRange
            title="Brightness"
            initialValue={brightness}
            onValueChange={setBrightness}
            caption={brightnessString}
          />
          <SettingRange
            title="Roundness"
            initialValue={roundness}
            onValueChange={setRoundness}
            caption={roundnessString}
          />
          <SettingBoolean
            title="Show Hints"
            subtitle="Show each dot's value."
            onValueChange={setShowHints}
            initialValue={showHints}
          />
          <Button title="Save" onPress={saveSettings} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  clockPreview: {
    flex: 1,
  },
  settingsContainer: {
    flex: 2,
    margin: 20,
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

export default BinaryClockSettingScreen;
