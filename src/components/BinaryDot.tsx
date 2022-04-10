import React from "react";
import { StyleSheet, View } from "react-native";

const BinaryDot: React.FC<{
  active: boolean;
}> = ({active}) => {
  return (
    <View style={[styles.dot, active ? styles.activeDot : styles.inactiveDot]}></View>
  )
} 

const styles = StyleSheet.create({
  dot: {
    margin: 5,
    borderRadius: 15,
    width: 60,
    height: 60,
    backgroundColor: "green",
  },
  activeDot: {
    opacity: 0.5,
  },
  inactiveDot: {
    opacity: 0.1,
  },
});

export default BinaryDot;