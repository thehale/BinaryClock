// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import {Pressable, StatusBar, View, useWindowDimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useBrightness, useShowHints} from '../utils/BinaryClockSettings';

import BinaryClock from '../components/BinaryClock';
import KeepAwake from 'react-native-keep-awake';
import Orientation from '../utils/orientation';
import Toast from 'react-native-toast-message';

const BinaryClockScreen: React.FC<{
  navigation: any;
}> = ({navigation}) => {
  const [brightness] = useBrightness();
  const [showHints] = useShowHints();
  const {height, width} = useWindowDimensions();
  let orientation =
    height > width ? Orientation.Portrait : Orientation.Landscape;
  useEffect(() => {
    Toast.show({
      type: 'info',
      text1: '⚙️ Settings Available ⚙️',
      text2: 'Access settings by pressing and holding the clock',
      visibilityTime: 10000,
    });
  }, []);
  return (
    <Pressable
      onLongPress={() => navigation.navigate('BinaryClockSettingsScreen')}>
      <View>
        <StatusBar hidden={true} />
        {/* @ts-ignore */}
        <KeepAwake />
        <BinaryClock
          orientation={orientation}
          brightness={brightness}
          showHints={showHints}
        />
      </View>
    </Pressable>
  );
};

export default BinaryClockScreen;
