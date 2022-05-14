import React, {useEffect} from 'react';
import {View, StatusBar, Pressable, useWindowDimensions} from 'react-native';
import KeepAwake from 'react-native-keep-awake';

import BinaryClock from '../components/BinaryClock';
import Orientation from '../utils/orientation';
import {useBrightness} from '../utils/BinaryClockSettings';
import Toast from 'react-native-toast-message';

const BinaryClockScreen: React.FC<{
  navigation: any;
}> = ({navigation}) => {
  const [brightness] = useBrightness();
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
        <KeepAwake />
        <BinaryClock orientation={orientation} brightness={brightness} />
      </View>
    </Pressable>
  );
};

export default BinaryClockScreen;
