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

const SettingBoolean = ({
  title,
  subtitle,
  initialValue,
  onValueChange,
  onValueSet,
}: Props) => {
  const _onValueChange = useCallback(
    (value: boolean) => {
      onValueChange(value);
      onValueSet(value);
    },
    [onValueChange, onValueSet],
  );
  return (
    <SettingItem
      title={title}
      subtitle={subtitle}
      right={<Switch onValueChange={_onValueChange} value={initialValue} />}
    />
  );
};

export default SettingBoolean;
