import React from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";

const AllEvents = ({ navigation }) => {
  const [events, setListOfEvents] = useState();
  useEffect(() => {
    axios
      .get("https://rendezvous-backend.onrender.com/api/user_ideas")
      .then(({ data }) => {
        setListOfEvents(data.ideas);
      });
  }, []);

  const handlingPress = (item) => {
    navigation.navigate("EventDetails", { event: item });
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlingPress(item)}>
        <View
          style={{
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "#ffc1cc",
            padding: 10,
          }}
        >
          <Text style={{ marginBottom: 10, fontSize: 15, textAlign: "center" }}>
            {item.title}
          </Text>
          <Image
            style={{ height: 200, width: 250 }}
            source={{
              uri: item.image_url,
            }}
          />
          <Text>
            Hours: {item.opening_time} - {item.closing_time}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const myItemSeparator = () => {
    return <View style={{ height: 10 }} />;
  };
  return (
    <SafeAreaView style={{ alignItems: "center", backgroundColor: "#ffafcc" }}>
      <View style={{ alignItems: "center", marginBottom: 20 }}></View>
      <FlatList
        data={events}
        renderItem={renderItem}
        ItemSeparatorComponent={myItemSeparator}
      />
    </SafeAreaView>
  );
};

export default AllEvents;
