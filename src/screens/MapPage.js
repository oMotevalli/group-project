import React from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const MapPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rendezvous</Text>
      <MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    color: "#fff",
    fontFamily: "sans-serif-thin",
  },
  container: {
    backgroundColor: "#ffafcc",
    flex: 1,
  },
  map: {
    margin: 50,
    width: "80%",
    height: "50%",
  },
});

export default MapPage;
