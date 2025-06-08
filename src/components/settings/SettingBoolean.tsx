// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, {useCallback} from 'react';

import SettingItem from './SettingItem';
import {Switch} from 'react-native';

type Props = {
  title: string;
  subtitle: string;
  initialValue: boolean;
  onValueChange: (value: boolean) => void;
  onValueSet: (value: boolean) => void;
};

const SettingBoolean = (props: Props) => {
  const onValueChange = useCallback(
    (value: boolean) => {
      props.onValueChange(value);
      props.onValueSet(value);
    },
    [props.onValueChange, props.onValueSet],
  );
  return (
    <SettingItem
      title={props.title}
      subtitle={props.subtitle}
      right={
        <Switch onValueChange={onValueChange} value={props.initialValue} />
      }
    />
  );
};

export default SettingBoolean;
