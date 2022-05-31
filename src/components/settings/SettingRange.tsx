// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
import {Text} from 'react-native';
import React from 'react';
import SettingItem from './SettingItem';
import Slider from '@react-native-community/slider';

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

const SettingRange = (props: Props) => {
  const defaults = {
    caption: '',
    initialValue: 0,
    min: 0,
    max: 1,
    step: 0.01,
  };
  const args = {...defaults, ...props};
  return (
    <SettingItem
      title={args.title}
      subtitle={args.subtitle}
      right={<Text>{args.caption}</Text>}
      bottom={
        <Slider
          value={args.initialValue}
          onValueChange={args.onValueChange}
          minimumValue={args.min}
          maximumValue={args.max}
          step={args.step}
        />
      }
    />
  );
};

export default SettingRange;
