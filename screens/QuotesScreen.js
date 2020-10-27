import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import CreateMainTable from "../components/CreateMainTable.js";
import ErrorBlock from "../components/ErrorBlock.js";
import GetTickerInfo from "../services/GetTickerInfo.js";
import Spinner from "react-native-loading-spinner-overlay";

export default function QuotesScreen() {
  const [table, setTable] = useState(null);
  const [errorBlockVisible, setErrorBlockVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const getData = async () => {
    const tickerData = await GetTickerInfo();
    if (tickerData !== "error") {
      const tableInfo = CreateMainTable(tickerData);
      setTable(tableInfo);
      setErrorBlockVisible(false);
    } else {
      setErrorBlockVisible(true);
    }
  };

  const onLoad = async () => {
    await getData();
    setSpinner(false);
  };

  useEffect(() => {
    onLoad();
    const interval = setInterval(() => {
      getData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Spinner visible={spinner} />
      {errorBlockVisible ? <ErrorBlock /> : null}
      {table}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
