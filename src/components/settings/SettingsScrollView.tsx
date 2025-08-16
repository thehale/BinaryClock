// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { Button, ScrollView, StyleSheet } from "react-native";
import { useSettings } from "../../settings/useSettings";
import SettingRange from "./SettingRange";
import SettingBoolean from "./SettingBoolean";


export default function SettingsScrollView() {
  const [settings, updateSettings, resetToDefaults] = useSettings('SettingsScrollView');
  const brightnessString = `${Math.round(settings.brightness * 100)}%`;
  const roundnessString = `${Math.round(settings.roundness * 100)}%`;
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <SettingBoolean
        title="Show Hints"
        subtitle="Learn how to read a binary clock"
        onValueChange={value => updateSettings({ showHints: value })}
        initialValue={settings.showHints}
      />
      <SettingRange
        title="Brightness"
        initialValue={settings.brightness}
        onValueChange={value => updateSettings({ brightness: value })}
        caption={brightnessString}
      />
      <SettingRange
        title="Roundness"
        initialValue={settings.roundness}
        onValueChange={value => updateSettings({ roundness: value })}
        caption={roundnessString}
      />
      <Button title="Reset" onPress={resetToDefaults}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    justifyContent: 'flex-start',
  },
})