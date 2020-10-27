import React from "react";
import { View, Text, StyleSheet } from "react-native";

function createTableRow(name, obj, i) {
  return (
    <View style={i % 2 ? styles.greyBlock : styles.whiteBlock} key={obj.id}>
      <View style={styles.topRow}>
        <View style={styles.leftBlock}>
          <Text style={styles.bigText}>{name}</Text>
        </View>
        <View style={styles.rightBlock}>
          <Text style={styles.smallText}>Last: </Text>
          <Text style={styles.boldText}>{obj.last}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.leftBlock}>
          <Text style={styles.smallText}>Highest bid: </Text>
          <Text>{obj.highestBid}</Text>
        </View>
        <View style={styles.rightBlock}>
          <Text style={styles.smallText}>Percent change: </Text>
          <Text>{obj.percentChange}</Text>
        </View>
      </View>
    </View>
  );
}

export default function CreateMainTable(tickerData) {
  let i = 0;
  const array = [];
  for (const data in tickerData) {
    i++;
    array.push(createTableRow(data, tickerData[data], i));
  }
  return array;
}

export const styles = StyleSheet.create({
  greyBlock: {
    borderBottomWidth: 2,
    borderBottomColor: "#D4D4D4",
    backgroundColor: "#F0F0F0",
  },
  whiteBlock: {
    borderBottomWidth: 2,
    borderBottomColor: "#D4D4D4",
    backgroundColor: "#FAFFFF",
  },
  topRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
  },
  row: {
    flexDirection: "row",
  },
  leftBlock: {
    width: "50%",
    justifyContent: "center",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRightWidth: 1,
    borderRightColor: "#E6E6E6",
  },
  rightBlock: {
    justifyContent: "center",
    paddingLeft: 12,
    paddingTop: 5,
    paddingBottom: 5,
  },
  bigText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#35737F",
  },
  smallText: {
    fontSize: 12,
  },
  boldText: {
    fontWeight: "bold",
  },
});
