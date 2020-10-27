import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.mainBlock}>
        <Image style={styles.logo} source={require("../assets/poloniex.png")} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Quotes")}
        >
          <Text style={styles.blueText}>Let's Go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainBlock: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 200,
    height: 200,
  },
  button: {
    width: 180,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#FAFFFF",
    borderWidth: 2,
    borderColor: "#4ea7b8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  blueText: {
    textAlign: "center",
    color: "#3F8695",
    fontSize: 20,
  },
});
