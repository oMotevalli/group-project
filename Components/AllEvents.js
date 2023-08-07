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
      .get("https://rendezvous-backend.onrender.com/api/user_ideas")
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
    return (
      <View>
        <TouchableOpacity onPress={() => handlingPress(item)}>
          <View
            style={{
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#fff",
              backgroundColor: "#cdb4db",
              padding: 10,
            }}
          >
            <Text
              style={{ marginBottom: 10, fontSize: 15, textAlign: "center" }}
            >
              {item.title}
            </Text>
            <Image
              style={{ height: 200, width: 250 }}
              source={{
                uri: item.image_url,
              }}
            />
            <Text>Price: from £{item.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const myItemSeparator = () => {
    return <View style={{ height: 5, width: 350 }} />;
  };
  return (
    <SafeAreaView style={{ alignItems: "center", backgroundColor: "#ffafcc" }}>
      <CustomHeader />
      <View style={{ alignItems: "center" }}></View>
      <FlatList
        data={events}
        renderItem={renderItem}
        ItemSeparatorComponent={myItemSeparator}
      />
    </SafeAreaView>
  );
};

export default AllEvents;
