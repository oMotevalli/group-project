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

const EventDetails = ({ route, navigation }) => {
  const { event } = route.params;
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
        <View style={{ alignItems: "flex-end" }}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../assets/giphy.gif")}
          ></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetails;
