import {useIsFocused} from '@react-navigation/native';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import DefaultPreference from 'react-native-default-preference';

class BinaryClockSettings {
  public static async getPreferences() {
    return {
      brightness: await this.getBrightness(),
    };
  }

  public static async getBrightness() {
    let temp = await DefaultPreference.get('brightness');
    if (temp === undefined || temp === null) {
      temp = '0.5';
    }
    return Number(temp);
  }

  public static async setBrightness(brightness: number) {
    await DefaultPreference.set('brightness', brightness.toString());
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

export {useBrightness, BinaryClockSettings};
