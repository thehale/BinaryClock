import React from "react";
import { StyleSheet, View, useWindowDimensions, Text } from "react-native";
import BinaryDot from "./BinaryDot";

const BinaryDigit: React.FC<{
  value: number;
}> = ({ value }) => {
  const { height, width } = useWindowDimensions();
  if (height > width) {
    return (
      <View style={styles.pair}>
        <View style={styles.digit}>
          <BinaryDot active={(value & 32) > 0} value={32} />
          <BinaryDot active={(value & 16) > 0} value={16} />
          <BinaryDot active={(value & 8) > 0} value={8} />
          <BinaryDot active={(value & 4) > 0} value={4} />
          <BinaryDot active={(value & 2) > 0} value={2} />
          <BinaryDot active={(value & 1) > 0} value={1} />
        </View>
      </View>
    );
  } else {
    const firstDigit = Math.floor(value / 10);
    const secondDigit = value % 10;
    return (
      <View style={styles.pair}>
        <View style={styles.digit}>
          <BinaryDot active={(firstDigit & 8) > 0} value={8} />
          <BinaryDot active={(firstDigit & 4) > 0} value={4} />
          <BinaryDot active={(firstDigit & 2) > 0} value={2} />
          <BinaryDot active={(firstDigit & 1) > 0} value={1} />
        </View>
        <View style={styles.digit}>
          <BinaryDot active={(secondDigit & 8) > 0} value={8} />
          <BinaryDot active={(secondDigit & 4) > 0} value={4} />
          <BinaryDot active={(secondDigit & 2) > 0} value={2} />
          <BinaryDot active={(secondDigit & 1) > 0} value={1} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  digit: {
    flexDirection: "column",
  },
  pair: {
    flexDirection: "row",
    padding: 20,
  },
});

export default BinaryDigit;

