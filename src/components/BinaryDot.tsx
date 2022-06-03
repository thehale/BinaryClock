// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface BinaryDotProps {
  active: boolean;
  visible?: boolean;
  value?: number;
  brightness?: number;
  showHints?: boolean;
}

const BinaryDot: React.FC<BinaryDotProps> = args => {
  const defaults = {
    visible: true,
    value: 1,
    brightness: 1,
    showHints: false,
  };
  const props = {...defaults, ...args};
  let active_modifier = props.active ? 1 : 0.25;
  let visible_modifier = props.visible ? 1 : 0;
  let opacity = props.brightness * active_modifier * visible_modifier;
  return (
    <View style={[styles.dot, {opacity: opacity}]}>
      {props.showHints && props.value && (
        <View style={styles.hint}>
          <Text style={styles.hintText}>{props.value}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    margin: '15%',
    borderRadius: 30,
    flex: 1,
    aspectRatio: 1,
    maxWidth: 60,
    maxHeight: 60,
    backgroundColor: 'green',
  },
  activeDot: {
    opacity: 1,
  },
  inactiveDot: {
    opacity: 0.25,
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
