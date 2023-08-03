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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginTop: 10,
              marginBottom: 10,
              fontWeight: "600",
            }}
          >
            {event.title}
          </Text>
          <Image
            style={{ height: 400, width: "auto", marginHorizontal: 10 }}
            source={{
              uri: event.image_url,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 5,
              columnGap: 2,
            }}
          >
            <Text style={{ fontSize: 10 }}>{event.address}</Text>
            <Text style={{ fontSize: 10 }}>
              Opening times {event.opening_time} - {event.closing_time}
            </Text>
            <Text style={{ fontSize: 10 }}>Prices from £{event.price}</Text>
          </View>
          <Text style={{ marginTop: 15, marginHorizontal: 10, fontSize: 20 }}>
            {event.description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetails;
