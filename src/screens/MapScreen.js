import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => {
  const [region, setRegion] = useState({
    longitude: -2.242631,
    latitude: 53.480759,
    longitudeDelta: 0.04,
    latitudeDelta: 0.04,
  });

  //   probably need function to change the region

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rendezvous</Text>
      <MapView style={styles.map} region={region} />
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

export default MapScreen;
