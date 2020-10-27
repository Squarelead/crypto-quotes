import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ErrorBlock() {
  return (
    <View style={styles.mainBlock}>
      <Text style={styles.redText}>Error!</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  mainBlock: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FCD6D6",
    width: "100%",
    height: 50,
  },
  redText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
