import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";

const MapScreen = () => {
  const [region, setRegion] = useState({
    // longitude: -2.242631,
    // latitude: 53.480759,
    // longitudeDelta: 0.04,
    // latitudeDelta: 0.04,
    longitude: -122.4324,
    latitude: 37.78825,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09,
  });
  const [pin, setPin] = useState({ longitude: -122.4324, latitude: 37.78825 });

  //   probably need function to change the region

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rendezvous</Text>
      <MapView style={styles.map} region={region} provider="google">
        <Marker
          coordinate={pin}
          pinColor={"blue"}
          draggable={true}
          onDragStart={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
          onDragEnd={(e) => {
            console.log("Drag end:", e.nativeEvent.coordinates);
          }}
        >
          <Callout>
            <Text>You</Text>
          </Callout>
        </Marker>
      </MapView>
      <Text>Hello</Text>
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
