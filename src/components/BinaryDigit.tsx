import React from "react";
import { StyleSheet, View } from "react-native";
import BinaryDot from "./BinaryDot";

const BinaryDigit: React.FC<{
  value: number;
}> = ({ value }) => {
  const firstDigit = Math.floor(value / 10);
  const secondDigit = value % 10;
  return (
    <View style={styles.pair}>
      <View style={styles.digit}>
        <BinaryDot active={(firstDigit & 1) > 0} />
        <BinaryDot active={(firstDigit & 2) > 0} />
        <BinaryDot active={(firstDigit & 4) > 0} />
        <BinaryDot active={(firstDigit & 8) > 0} />
      </View>
      <View style={styles.digit}>
        <BinaryDot active={(secondDigit & 1) > 0} />
        <BinaryDot active={(secondDigit & 2) > 0} />
        <BinaryDot active={(secondDigit & 4) > 0} />
        <BinaryDot active={(secondDigit & 8) > 0} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  digit: {
    flexDirection: "row",
    paddingRight: 5,
    paddingLeft: 5,
  },
  pair: {
    padding: 20,
  },
});

export default BinaryDigit;

