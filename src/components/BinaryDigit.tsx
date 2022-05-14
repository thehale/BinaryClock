import React from 'react';
import {StyleSheet, View} from 'react-native';

import BinaryDot from './BinaryDot';
import Orientation from '../utils/orientation';

/* eslint no-bitwise: ["error", { "allow": ["&"] }] */
const BinaryDigit: React.FC<{
  value: number;
  orientation: Orientation;
  brightness?: number;
}> = ({value, orientation, brightness = 0.5}) => {
  switch (orientation) {
    case Orientation.Portrait:
      return (
        <View style={styles.pair}>
          <View style={styles.digit}>
            <BinaryDot
              active={(value & 32) > 0}
              value={32}
              brightness={brightness}
            />
            <BinaryDot
              active={(value & 16) > 0}
              value={16}
              brightness={brightness}
            />
            <BinaryDot
              active={(value & 8) > 0}
              value={8}
              brightness={brightness}
            />
            <BinaryDot
              active={(value & 4) > 0}
              value={4}
              brightness={brightness}
            />
            <BinaryDot
              active={(value & 2) > 0}
              value={2}
              brightness={brightness}
            />
            <BinaryDot
              active={(value & 1) > 0}
              value={1}
              brightness={brightness}
            />
          </View>
        </View>
      );
    case Orientation.Landscape:
      const firstDigit = Math.floor(value / 10);
      const secondDigit = value % 10;
      return (
        <View style={styles.pair}>
          <View style={styles.digit}>
            <BinaryDot
              active={(firstDigit & 8) > 0}
              value={8}
              brightness={brightness}
            />
            <BinaryDot
              active={(firstDigit & 4) > 0}
              value={4}
              brightness={brightness}
            />
            <BinaryDot
              active={(firstDigit & 2) > 0}
              value={2}
              brightness={brightness}
            />
            <BinaryDot
              active={(firstDigit & 1) > 0}
              value={1}
              brightness={brightness}
            />
          </View>
          <View style={styles.digit}>
            <BinaryDot
              active={(secondDigit & 8) > 0}
              value={8}
              brightness={brightness}
            />
            <BinaryDot
              active={(secondDigit & 4) > 0}
              value={4}
              brightness={brightness}
            />
            <BinaryDot
              active={(secondDigit & 2) > 0}
              value={2}
              brightness={brightness}
            />
            <BinaryDot
              active={(secondDigit & 1) > 0}
              value={1}
              brightness={brightness}
            />
          </View>
        </View>
      );
  }
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
