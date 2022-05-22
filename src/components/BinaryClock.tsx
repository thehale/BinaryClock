// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import BinaryDigit from './BinaryDigit';
import Orientation from '../utils/orientation';

const BinaryClock: React.FC<{
  orientation: Orientation;
  brightness?: number;
}> = ({orientation, brightness = 0.5}) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const toggle = setInterval(() => {
      setTime(new Date());
    }, 50);
    return () => clearInterval(toggle);
  });
  return (
    <View style={styles.binaryClock}>
      <BinaryDigit
        value={time.getHours()}
        orientation={orientation}
        brightness={brightness}
      />
      <BinaryDigit
        value={time.getMinutes()}
        orientation={orientation}
        brightness={brightness}
      />
      <BinaryDigit
        value={time.getSeconds()}
        orientation={orientation}
        brightness={brightness}
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
  },
});

export default BinaryClock;
