import React from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
const EventDetails = ({ route, navigation }) => {
  const { event } = route.params;
  const region = {
    longitude: event.longitude,
    latitude: event.latitude + 0.00055,
    longitudeDelta: 0.04,
    latitudeDelta: 0.04,
    zoom: 1,
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffafcc" }}>
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 24,
              textAlign: "left",
              margin: 20,
              color: "#313131",
              fontWeight: "600",
              textDecorationLine: "underline",
            }}
          >
            {event.title}
          </Text>
          <Image
            style={{
              height: 300,
              width: 350,
              marginHorizontal: 20,
              borderRadius: 10,
              borderWidth: 5,
              borderColor: "#bde0fe",
            }}
            source={{
              uri: event.image_url,
            }}
          />
          <Image
            style={{
              tintColor: "#fff",
              position: "absolute",
              width: 25,
              height: 25,
              top: 375,
              right: 75,
            }}
            source={require("../assets/heart5.png")}
          ></Image>
          <Image
            style={{
              tintColor: "#fff",
              position: "absolute",
              width: 25,
              height: 25,
              top: 375,
              right: 40,
            }}
            source={require("../assets/share.png")}
          ></Image>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginHorizontal: 20,
              marginTop: 10,
              columnGap: 2,
            }}
          >
            <Text style={{ fontSize: 10 }}>{event.address}</Text>
          </View>
          <Text style={{ marginTop: 15, marginHorizontal: 20, fontSize: 18 }}>
            {event.description}
          </Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              marginHorizontal: 20,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              Opening times {event.opening_time} - {event.closing_time}
            </Text>
            <Text style={{ fontSize: 10 }}>Prices from £{event.price}</Text>
          </View>
        </View>

        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={region}
            provider="google"
            minZoomLevel={16}
          >
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
                  <Text style={{ fontSize: 10 }}>{event.address}</Text>
                </View>
              </Callout>
            </Marker>
          </MapView>
        </View>
        <View>
          <Image
            style={{
              width: 150,
              height: 150,
              position: "absolute",
              top: -345,
              left: 220,
            }}
            source={require("../assets/giphy.gif")}
          ></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffafcc",
    margin: 20,
    position: "relative",
  },
  map: {
    width: 350,
    height: 250,
  },
  calloutContainer: {
    display: "flex",
    width: 165,
    height: "auto",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  calloutText: {
    fontSize: 12,
    fontWeight: "bold",
    // padding: 100,
  },
});
export default EventDetails;
