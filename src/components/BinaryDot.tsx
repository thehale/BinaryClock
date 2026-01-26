// Copyright (c) 2022-2024 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

import { BinaryBit } from '../utils/binaryTime';
import React from 'react';
import { useTheme } from '../theme/useTheme';
import { ClockTheme } from '../theme/types';
import { DEFAULT_SETTINGS } from '../settings/definitions';

interface BinaryDotProps {
  bit: BinaryBit;
  brightness?: number;
  roundness?: number;
  fill?: number;
  showHints?: boolean;
}

const DEFAULTS = {
  brightness: DEFAULT_SETTINGS.brightness,
  roundness: DEFAULT_SETTINGS.roundness,
  fill: DEFAULT_SETTINGS.fill,
  showHints: DEFAULT_SETTINGS.showHints,
};

const BinaryDot: React.FC<BinaryDotProps> = args => {
  const props = { ...DEFAULTS, ...args };
  const { theme } = useTheme();
  const styles = createStyles(theme);

  let active_modifier = props.bit.active ? 1 : 0.25;
  let visible_modifier = props.bit.visible ? 1 : 0;
  const dotOverrides: ViewStyle = {
    opacity: props.brightness * active_modifier * visible_modifier,
    borderRadius: `${props.roundness * 50}%`,
    margin: `${(1 - props.fill) * 50}%`,
  };

  const fontOverrides: TextStyle = {
    fontSize: Math.max(1, 40 * props.fill),
  }

  return (
    <View style={[styles.dot, dotOverrides]}>
      {props.showHints && props.bit.value && (
        <View style={styles.hint}>
          <Text style={[styles.hintText, fontOverrides]}>{props.bit.value}</Text>
        </View>
      )}
    </View>
  );
};

function createStyles(theme: ClockTheme) {
  return StyleSheet.create({
    dot: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      aspectRatio: 1,
      backgroundColor: theme.colors.dot,
    },
    hint: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
      height: '100%',
    },
    hintText: {
      color: theme.colors.onDot,
      fontWeight: "bold",
    },
  });
}

export default BinaryDot;
