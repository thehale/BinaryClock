// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BinaryDot: React.FC<{
  active: boolean;
  value?: number;
  brightness?: number;
  showHints?: boolean;
}> = ({active, value, brightness = 0.5, showHints = false}) => {
  return (
    <View style={[styles.dot, {opacity: active ? brightness : brightness / 4}]}>
      {showHints && value && (
        <View style={styles.hint}>
          <Text style={styles.hintText}>{value}</Text>
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
    opacity: 0.5,
  },
  inactiveDot: {
    opacity: 0.125,
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
