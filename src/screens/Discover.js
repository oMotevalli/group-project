import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomHeader from "../screens/Header";
import MapScreen from "./MapScreen";
import styles from "../../styling";

const Discover = () => {
  return (
    <View style={stylesInLine.pageContainer}>
      <CustomHeader />
      <MapScreen />
    </View>
  );
};

const stylesInLine = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#ffafcc",
    height: "100%",
    paddingTop: 40,
  },
});

export default Discover;
