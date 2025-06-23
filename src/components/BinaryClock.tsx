// Copyright (c) 2022-2024 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import {BinaryTimeMode} from '../utils/binaryTime';
import {StyleSheet, View} from 'react-native';

import BinaryDigit from './BinaryDigit';
import Orientation from '../utils/orientation';
import React from 'react';
import { useBinaryTime } from '../utils/useBinaryTime';

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
  if (props.orientation === Orientation.Landscape) {
    return <LandscapeClock {...props} />;
  } else if (props.orientation === Orientation.Portrait) {
    return <PortraitClock {...props} />;
  } else {
    throw new Error(`Invalid orientation: ${props.orientation}`);
  }
};

const LandscapeClock: React.FC<BinaryClockProps> = props => {
  const digits = useBinaryTime(BinaryTimeMode.DOUBLE_DIGITS);
  return (
    <View style={styles.binaryClock}>
      <BinaryDigit
        key="hours-tens"
        digit={digits[0]}
        brightness={props.brightness}
        roundness={props.roundness}
        showHints={props.showHints}
      />
      <BinaryDigit
        key="hours-ones"
        digit={digits[1]}
        brightness={props.brightness}
        roundness={props.roundness}
        showHints={props.showHints}
      />
      <BinaryDigit
        key="minutes-tens"
        digit={digits[2]}
        brightness={props.brightness}
        roundness={props.roundness}
        showHints={props.showHints}
      />
      <BinaryDigit
        key="minutes-ones"
        digit={digits[3]}
        brightness={props.brightness}
        roundness={props.roundness}
        showHints={props.showHints}
      />
      <BinaryDigit
        key="seconds-tens"
        digit={digits[4]}
        brightness={props.brightness}
        roundness={props.roundness}
        showHints={props.showHints}
      />
      <BinaryDigit
        key="seconds-ones"
        digit={digits[5]}
        brightness={props.brightness}
        roundness={props.roundness}
        showHints={props.showHints}
      />
    </View>
  );
};

const PortraitClock: React.FC<BinaryClockProps> = props => {
  const digits = useBinaryTime(BinaryTimeMode.SINGLE_DIGITS);
  return (
    <View style={styles.binaryClock}>
      <BinaryDigit
        key="hours"
        digit={digits[0]}
        brightness={props.brightness}
        roundness={props.roundness}
        showHints={props.showHints}
      />
      <BinaryDigit
        key="minutes"
        digit={digits[1]}
        brightness={props.brightness}
        roundness={props.roundness}
        showHints={props.showHints}
      />
      <BinaryDigit
        key="seconds"
        digit={digits[2]}
        brightness={props.brightness}
        roundness={props.roundness}
        showHints={props.showHints}
      />
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
