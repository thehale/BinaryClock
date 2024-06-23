// Copyright (c) 2024 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import {useEffect, useState} from 'react';

type Milliseconds = number;

export function useTime(refreshRate: Milliseconds = 50) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const toggle = setInterval(() => setTime(new Date()), refreshRate);
    return () => clearInterval(toggle);
  });
  return time;
}
