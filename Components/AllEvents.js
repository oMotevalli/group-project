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
import Carousel from "react-native-snap-carousel";

const AllEvents = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setListOfEvents] = useState();
  useEffect(() => {
    axios
      .get("https://rendezvous-backend.onrender.com/api/user_ideas")
      .then(({ data }) => {
        setListOfEvents(data.ideas);
        setIsLoading(false);
      });
  }, []);

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
              backgroundColor: "#ffc1cc",
              padding: 10,
              height: 500,
              marginLeft: 10,
              marginRight: 10,
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
            <Text>
              Hours: {item.opening_time} - {item.closing_time}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const myItemSeparator = () => {
    return <View style={{ height: 100 }} />;
  };
  return (
    <SafeAreaView style={{ alignItems: "center", backgroundColor: "#ffafcc" }}>
      <View style={stylesInLine.pageContainer}>
        <CustomHeader style={{ marginTop: 130 }} />
        <View style={{ alignItems: "center", marginBottom: 10, marginTop: 50 }}>
          <Carousel
            data={events}
            renderItem={renderItem}
            ItemSeparatorComponent={myItemSeparator}
            itemWidth={300}
            sliderWidth={300}
            autoplay
            autoplayInterval={12000}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            snapToAlignment="start"
            snapToInterval={300}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const stylesInLine = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#ffafcc",
    height: "100%",
    paddingTop: 40,
  },
});

export default AllEvents;
