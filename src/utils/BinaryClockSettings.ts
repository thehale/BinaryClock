// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import {useIsFocused} from '@react-navigation/native';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import DefaultPreference from 'react-native-default-preference';

const BRIGHTNESS_KEY = 'brightness';
const SHOW_HINTS_KEY = 'showHints';

class BinaryClockSettings {
  public static async getPreferences() {
    return {
      brightness: await this.getBrightness(),
      showHints: await this.getShowHints(),
    };
  }

  public static async setPreferences(preferences: {
    brightness: number;
    showHints: boolean;
  }) {
    await this.setBrightness(preferences.brightness);
    await this.setShowHints(preferences.showHints);
  }

  public static async getBrightness() {
    let temp = await DefaultPreference.get(BRIGHTNESS_KEY);
    if (temp === undefined || temp === null) {
      temp = '0.5';
    }
    return Number(temp);
  }

  public static async setBrightness(brightness: number) {
    await DefaultPreference.set(BRIGHTNESS_KEY, brightness.toString());
  }

  public static async getShowHints() {
    let temp = await DefaultPreference.get(SHOW_HINTS_KEY);
    if (temp === undefined || temp === null) {
      temp = 'false';
    }
    return temp === 'true';
  }

  public static async setShowHints(showHints: boolean) {
    await DefaultPreference.set(SHOW_HINTS_KEY, showHints.toString());
  }
}

function useBrightness(): [number, Dispatch<SetStateAction<number>>] {
  const [brightness, setBrightness] = useState(0.5);
  const isFocused = useIsFocused();
  useEffect(() => {
    BinaryClockSettings.getBrightness()
      .then(value => {
        console.debug('Brightness Setting: ' + value);
        setBrightness(value);
      })
      .catch(err => {
        console.error(err);
        setBrightness(0.5);
      });
  }, [isFocused]);
  return [brightness, setBrightness];
}

function useShowHints(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [showHints, setShowHints] = useState(false);
  const isFocused = useIsFocused();
  useEffect(() => {
    BinaryClockSettings.getShowHints()
      .then(value => {
        console.debug('Show Hints Setting: ' + value);
        setShowHints(value);
      })
      .catch(err => {
        console.error(err);
        setShowHints(false);
      });
  }, [isFocused]);
  return [showHints, setShowHints];
}

export {useBrightness, useShowHints, BinaryClockSettings};
