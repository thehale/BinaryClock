// Copyright (c) 2022-2024 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import {StyleSheet, Text, View, ViewStyle} from 'react-native';

import {BinaryBit} from '../utils/binaryTime';
import React from 'react';

interface BinaryDotProps {
  bit: BinaryBit;
  brightness?: number;
  roundness?: number;
  showHints?: boolean;
}

const DEFAULTS = {
  brightness: 1,
  roundness: 1,
  showHints: false,
};

const FULL_ROUNDNESS_RADIUS = 30;

const BinaryDot: React.FC<BinaryDotProps> = args => {
  const props = {...DEFAULTS, ...args};

  let active_modifier = props.bit.active ? 1 : 0.25;
  let visible_modifier = props.bit.visible ? 1 : 0;
  const overrides: ViewStyle = {
    opacity: props.brightness * active_modifier * visible_modifier,
    borderRadius: props.roundness * FULL_ROUNDNESS_RADIUS,
  };

  return (
    <View style={[styles.dot, overrides]}>
      {props.showHints && props.bit.value && (
        <View style={styles.hint}>
          <Text style={styles.hintText}>{props.bit.value}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    margin: '15%',
    flex: 1,
    aspectRatio: 1,
    maxWidth: 60,
    maxHeight: 60,
    backgroundColor: 'green',
  },
  hint: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    height: '100%',
  },
  hintText: {
    color: 'white',
    fontSize: 20,
    opacity: 0.25,
  },
});

export default BinaryDot;
