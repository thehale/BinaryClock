// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, {useCallback} from 'react';
import {StyleSheet, Text} from 'react-native';

import SettingItem from './SettingItem';
import Slider from '@react-native-community/slider';
import debounce from 'lodash/debounce';

type Props = {
  title: string;
  onValueChange: (value: number) => void;
  subtitle?: string;
  caption?: string;
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
};

const propDefaults = {
  caption: '',
  initialValue: 0,
  min: 0,
  max: 1,
  step: 0.01,
};

const SettingRange = (props: Props) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onValueChange = useCallback(
    debounce(props.onValueChange, 25, {leading: true, trailing: true}),
    [props.onValueChange],
  );
  const args = {...propDefaults, ...props};
  return (
    <SettingItem
      title={args.title}
      subtitle={args.subtitle}
      right={<Text style={styles.caption}>{args.caption}</Text>}
      bottom={
        <Slider
          value={args.initialValue}
          onValueChange={onValueChange}
          minimumValue={args.min}
          maximumValue={args.max}
          step={args.step}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  caption: {
    color: 'black',
  },
});

export default SettingRange;
