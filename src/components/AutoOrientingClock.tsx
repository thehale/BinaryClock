// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { useState } from "react";
import { useSettings } from "../settings/useSettings";
import Orientation from "../utils/orientation";
import { StyleSheet, View } from "react-native";
import BinaryClock from "./BinaryClock";


export default function AutoOrientingClock({ lastAspectUpdate }: { lastAspectUpdate: Date }) {
  const [settings] = useSettings('AutoOrientingClock');
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
      onLayout={({ nativeEvent }) => {
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
          brightness={settings.brightness}
          roundness={settings.roundness}
          showHints={settings.showHints}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  blankClock: {
    height: '100%',
    backgroundColor: 'black',
  }
})