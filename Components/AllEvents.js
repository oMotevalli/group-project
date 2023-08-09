import React from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import CustomHeader from "../src/screens/Header";
import styles from "../styling";

const AllEvents = ({ navigation, route }) => {
  const refresh = route.params.refreshEvents;
  const [isLoading, setIsLoading] = useState(true);
  const [events, setListOfEvents] = useState();
  useEffect(() => {
    axios
      .get(
        "https://rendezvous-backend.onrender.com/api/user_ideas?sort_by=createdAt&order=desc"
      )
      .then(({ data }) => {
        setListOfEvents(data.ideas);
        setIsLoading(false);
      });
  }, [refresh]);

  const handlingPress = (item) => {
    navigation.navigate("EventDetails", { event: item });
  };
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="extra-large" color="white" />
      </View>
    );
  }

  const renderItem = ({ item }) => {
    let pounds = "";
    if (item.price < 5) {
      pounds = "£";
    } else if (item.price < 15) {
      pounds = "££";
    } else if (item.price < 30) {
      pounds = "£££";
    } else {
      pounds = "££££";
    }
    return (
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity onPress={() => handlingPress(item)}>
          <View
            style={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#fff",
              backgroundColor: "#cdb4db",
              padding: 10,
              margin: 5,
              width: 180,
              height: "auto",
            }}
          >
            <Image
              style={{ height: 100, width: 160, marginBottom: 10 }}
              source={{
                uri: item.image_url,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                gap: 3,
              }}
            >
              <Image
                style={{ height: 15, width: 12, tintColor: "white" }}
                source={require("../assets/location_pin.png")}
              ></Image>
              <Text style={{ textAlign: "left" }}>{item.location}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 3,
                alignItems: "baseline",
                flexWrap: "wrap",
              }}
            >
              <Text style={{ marginBottom: 0, fontSize: 15 }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "600" }}>{pounds}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const numColumns = 2;
  const myItemSeparator = () => {
    return <View style={{ height: 0 }} />;
  };
  return (
    <SafeAreaView style={{ alignItems: "center", backgroundColor: "#ffafcc" }}>
      <CustomHeader />
      <View style={{ height: "90%", width: "100%" }}>
        <FlatList
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          data={events}
          renderItem={renderItem}
          ItemSeparatorComponent={myItemSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllEvents;
