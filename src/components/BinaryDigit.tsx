// Copyright (c) 2022-2024 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import {StyleSheet, Text, View} from 'react-native';

import BinaryDot from './BinaryDot';
import React from 'react';
import {type BinaryDigit as BinaryDigitType} from '../utils/binaryTime';

interface BinaryDigitProps {
  digit: BinaryDigitType;
  brightness?: number;
  roundness?: number;
  showHints?: boolean;
}

const DEFAULTS = {
  brightness: 1,
  roundness: 1,
  showHints: false,
};

const BinaryDigit: React.FC<BinaryDigitProps> = args => {
  const props = {...DEFAULTS, ...args};
  return (
    <View style={styles.pair}>
      <View style={styles.digit}>
        {props.digit.bits.map((bit, idx) => (
          <BinaryDot
            key={idx}
            bit={bit}
            brightness={props.brightness}
            roundness={props.roundness}
            showHints={props.showHints}
          />
        ))}
        {props.showHints && (
          <Text style={styles.hint}>{props.digit.value}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  digit: {
    alignItems: 'center',
    flex: 1,
  },
  pair: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2%',
    flex: 1,
  },
  hint: {
    color: 'white',
    fontSize: 20,
    opacity: 0.25,
  },
});

export default BinaryDigit;
