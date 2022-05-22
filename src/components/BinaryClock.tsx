// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import BinaryDigit from './BinaryDigit';
import Orientation from '../utils/orientation';

interface BinaryClockProps {
  orientation?: Orientation;
  brightness?: number;
  showHints?: boolean;
}

const BinaryClock: React.FC<BinaryClockProps> = args => {
  const defaults = {
    orientation: Orientation.Landscape,
    brightness: 0.5,
    showHints: false,
  };
  const props = {...defaults, ...args};

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const toggle = setInterval(() => {
      setTime(new Date());
    }, 50);
    return () => clearInterval(toggle);
  });

  let digits = [];
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  switch (props.orientation) {
    case Orientation.Portrait:
      digits = [
        {key: 'h', value: hours, maxVisible: 23},
        {key: 'm', value: minutes, maxVisible: 59},
        {key: 's', value: seconds, maxVisible: 59},
      ];
      break;
    case Orientation.Landscape:
      digits = [
        {key: 'h10', value: firstDigit(hours), maxVisible: 2},
        {key: 'h1', value: secondDigit(hours), maxVisible: 9},
        {key: 'm10', value: firstDigit(minutes), maxVisible: 5},
        {key: 'm1', value: secondDigit(minutes), maxVisible: 9},
        {key: 's10', value: firstDigit(seconds), maxVisible: 5},
        {key: 's1', value: secondDigit(seconds), maxVisible: 9},
      ];
      break;
  }
  let maxValue = Math.max(...digits.map(digit => digit.maxVisible));

  return (
    <View style={styles.binaryClock}>
      {digits.map(digit => (
        <BinaryDigit
          key={digit.key}
          value={digit.value}
          maxVisible={digit.maxVisible}
          maxValue={maxValue}
          brightness={props.brightness}
          showHints={props.showHints}
        />
      ))}
    </View>
  );
};

function firstDigit(value: number) {
  return Math.floor(value / 10);
}
function secondDigit(value: number) {
  return value % 10;
}

const styles = StyleSheet.create({
  binaryClock: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
});

export default BinaryClock;
