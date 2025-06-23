// Copyright (c) 2022-2024 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import {StyleSheet, View} from 'react-native';

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
  if (props.digit.bits.length === 4) {
    return <FourDigit {...props} />;
  } else if (props.digit.bits.length === 6) {
    return <SixDigit {...props} />;
  } else {
    throw new Error(`Invalid digit length: ${props.digit.bits.length}`);
  }
};

const FourDigit: React.FC<BinaryDigitProps> = props => {
  const settings = {
    brightness: props.brightness,
    roundness: props.roundness,
    showHints: props.showHints,
  };
  return (
    <View style={styles.pair}>
      <View style={styles.digit}>
        <BinaryDot bit={props.digit.bits[0]} {...settings} />
        <BinaryDot bit={props.digit.bits[1]} {...settings} />
        <BinaryDot bit={props.digit.bits[2]} {...settings} />
        <BinaryDot bit={props.digit.bits[3]} {...settings} />
      </View>
    </View>
  );
};

const SixDigit: React.FC<BinaryDigitProps> = props => {
  const settings = {
    brightness: props.brightness,
    roundness: props.roundness,
    showHints: props.showHints,
  };
  return (
    <View style={styles.pair}>
      <View style={styles.digit}>
        <BinaryDot bit={props.digit.bits[0]} {...settings} />
        <BinaryDot bit={props.digit.bits[1]} {...settings} />
        <BinaryDot bit={props.digit.bits[2]} {...settings} />
        <BinaryDot bit={props.digit.bits[3]} {...settings} />
        <BinaryDot bit={props.digit.bits[4]} {...settings} />
        <BinaryDot bit={props.digit.bits[5]} {...settings} />
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
