// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
import {Switch} from 'react-native';
import React from 'react';
import SettingItem from './SettingItem';

type Props = {
  title: string;
  subtitle: string;
  initialValue: boolean;
  onValueChange: (value: boolean) => void;
};

const SettingBoolean = (props: Props) => {
  return (
    <SettingItem
      title={props.title}
      subtitle={props.subtitle}
      right={
        <Switch
          onValueChange={props.onValueChange}
          value={props.initialValue}
        />
      }
    />
  );
};

export default SettingBoolean;
