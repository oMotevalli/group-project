import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../screens/Header";
import MapScreen from "./MapScreen";
import styles from "../../styling";
import axios from "axios";

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [region, setRegion] = useState({
    latitude: 55.3618,
    longitude: -3.4433,
    longitudeDelta: 11,
    latitudeDelta: 11,
  });

  // Filter
  const [eventType, setEventType] = useState("");

  const handleSearch = () => {
    axios
      .get(
        `https://rendezvous-backend.onrender.com/api/search?location=${searchTerm.toLowerCase()}`
      )
      .then((response) => {
        setFilteredResults(response.data);
        console.log(searchTerm, "search term");
        if (searchTerm === "london" || searchTerm === "London") {
          setRegion({
            latitude: 51.509865,
            longitude: -0.118092,
            longitudeDelta: 0.04,
            latitudeDelta: 0.04,
          });
        } else if (searchTerm === "manchester" || searchTerm === "Manchester") {
          setRegion({
            latitude: 53.483959,
            longitude: -2.244644,
            longitudeDelta: 0.04,
            latitudeDelta: 0.04,
          });
        } else if (searchTerm === "edinburgh" || searchTerm === "Edinburgh") {
          setRegion({
            latitude: 55.95206,
            longitude: -3.19648,
            longitudeDelta: 0.04,
            latitudeDelta: 0.04,
          });
        }
        setSearchTerm("");
      });
  };

  return (
    <View style={stylesInLine.pageContainer}>
      <CustomHeader />
      <View style={styles.loginButtonContainer}>
        <TextInput
          style={styles.caInputStyle}
          placeholder="Search location..."
          value={searchTerm}
          onChangeText={(text) => {
            setSearchTerm(text);
          }}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleSearch}>
          <Text style={styles.loginButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setEventType("")}>
          <Text>All Events</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setEventType("food")}>
          <Text>Food</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setEventType("music")}>
          <Text>Music</Text>
        </TouchableOpacity>
      </View>
      <MapScreen
        results={filteredResults}
        region={region}
        eventType={eventType}
      />
    </View>
  );
};

const stylesInLine = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#ffafcc",
    height: "100%",
    paddingTop: 40,
  },
  filterContainer: {
    borderColor: "black",
    borderWidth: 1,
  },
});

export default Discover;
