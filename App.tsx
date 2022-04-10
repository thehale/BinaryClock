import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import KeepAwake from 'react-native-keep-awake';

import BinaryClock from './src/components/BinaryClock';


const App = () => {
  const isDarkMode = true // useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar hidden={true} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <KeepAwake />
        <BinaryClock isDarkMode={isDarkMode} />
    </View>
  );
};

export default App;
