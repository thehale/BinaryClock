import React, { useEffect, useState }  from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';

import BinaryDigit from "./BinaryDigit";

const BinaryClock: React.FC<{
  isDarkMode: boolean;
}> = ({isDarkMode}) => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const toggle = setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => clearInterval(toggle);
  })
  return (
    <View
      style={[styles.binaryClock, {
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }]}>
      <BinaryDigit value={time.getHours()}></BinaryDigit>
      <BinaryDigit value={time.getMinutes()}></BinaryDigit>
      <BinaryDigit value={time.getSeconds()}></BinaryDigit>
    </View>
  )
}

const styles = StyleSheet.create({
  binaryClock: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    height: "100%",
  }
});

export default BinaryClock;