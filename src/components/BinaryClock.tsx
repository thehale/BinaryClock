// Copyright (c) 2022-2024 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import {BinaryTimeMode, asBinaryTime} from '../utils/binaryTime';
import {StyleSheet, View} from 'react-native';

import BinaryDigit from './BinaryDigit';
import Orientation from '../utils/orientation';
import React from 'react';
import {useTime} from '../utils/useTime';

interface BinaryClockProps {
  orientation?: Orientation;
  brightness?: number;
  roundness?: number;
  showHints?: boolean;
}

const DEFAULTS = {
  orientation: Orientation.Landscape,
  brightness: 1,
  roundness: 1,
  showHints: false,
};

const BinaryClock: React.FC<BinaryClockProps> = args => {
  const props = {...DEFAULTS, ...args};
  const time = useTime();
  const digits = asBinaryTime(
    {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
    },
    {
      [Orientation.Portrait]: BinaryTimeMode.SINGLE_DIGITS,
      [Orientation.Landscape]: BinaryTimeMode.DOUBLE_DIGITS,
    }[props.orientation],
  );

  return (
    <View style={styles.binaryClock}>
      {digits.map((digit, idx) => (
        <BinaryDigit
          key={idx}
          digit={digit}
          brightness={props.brightness}
          roundness={props.roundness}
          showHints={props.showHints}
        />
      ))}
    </View>
  );
};

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
