import React from "react";
import { StyleSheet, View, Text} from "react-native";

const BinaryDot: React.FC<{
  active: boolean;
  value?: number;
  showHints?: boolean;
}> = ({active, value, showHints=false}) => {
  return (
    <View style={[styles.dot, active ? styles.activeDot : styles.inactiveDot]}>
      {showHints && value && (
        <View style={styles.hint}>
          <Text style={styles.hintText}>{value}</Text>
        </View>
      )}
    </View>
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
    opacity: 1.0,
  },
  inactiveDot: {
    opacity: 0.5,
  },
  hint: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    height: "100%",
  },
  hintText: {
    color: "white",
    fontSize: 20,
    opacity: 0.25,
  }
});

export default BinaryDot;