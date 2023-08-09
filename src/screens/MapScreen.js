import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import axios from "axios";

const MapScreen = ({ results, region, eventType }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (results.length > 0) {
      setEvents(results);
    } else {
    }
  }, [results]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} provider="google">
        {events.map((event) => (
          <Marker
            key={event._id}
            coordinate={{
              latitude: event.latitude,
              longitude: event.longitude,
            }}
            title={event.name}
          >
            <Callout>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{event.title}</Text>
                <Text>{event.address}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffafcc",
    flex: 1,
  },
  map: {
    margin: 50,
    width: "80%",
    height: "70%",
  },
  // // calloutContainer: {
  // //   width: 100,
  // //   height: 200,
  // // },
  calloutText: {
    fontWeight: "bold",
    // padding: 100,
  },
});

export default MapScreen;
