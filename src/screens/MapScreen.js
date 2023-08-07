import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import axios from "axios";

const MapScreen = () => {
  const [region, setRegion] = useState({
    longitude: -2.242631,
    latitude: 53.480759,
    longitudeDelta: 0.04,
    latitudeDelta: 0.04,
    // longitude: -122.4324,
    // latitude: 37.78825,
    // longitudeDelta: 0.04,
    // latitudeDelta: 0.09,
  });
  const [pin, setPin] = useState({ longitude: -122.4324, latitude: 37.78825 });
  const [events, setEvents] = useState([]);

  //   probably need function to change the region

  //API CALL
  const getEvents = () => {
    return axios
      .get("https://rendezvous-backend.onrender.com/api/user_ideas")
      .then((response) => {
        console.log(response.data.ideas);
        return response.data.ideas;
      });
  };

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} provider="google">
        {events.map((event) => (
          <Marker
            key={event.id}
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

{
  /* <Marker
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
> */
}
{
  /* <Callout>
        <Text>You</Text>
      </Callout>*/
}
{
  /* </Marker> */
}
