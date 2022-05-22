// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React from 'react';
import {StyleSheet, View} from 'react-native';

import BinaryDot from './BinaryDot';

interface BinaryDigitProps {
  value: number;
  brightness?: number;
  maxVisible?: number;
  maxValue?: number;
  showHints?: boolean;
}

/* eslint no-bitwise: ["error", { "allow": ["&"] }] */
const BinaryDigit: React.FC<BinaryDigitProps> = args => {
  const defaults = {
    brightness: 0.5,
    maxVisible: 15,
    maxValue: 15,
    showHints: false,
  };
  const props = {...defaults, ...args};

  let dotCount = 0;
  if (props.maxValue > 0) {
    dotCount = Math.floor(Math.log2(props.maxValue)) + 1;
  }
  let dotValues = Array.from(Array(dotCount), (_, i) => 2 ** i);

  return (
    <View style={styles.pair}>
      <View style={styles.digit}>
        {dotValues.reverse().map(value => (
          <BinaryDot
            key={value}
            active={(props.value & value) > 0}
            visible={props.maxVisible >= value}
            value={value}
            brightness={props.brightness}
            showHints={props.showHints}
          />
        ))}
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
});

export default BinaryDigit;
