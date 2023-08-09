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
    longitude: -3.4433,
    latitude: 55.3618,
    longitudeDelta: 11,
    latitudeDelta: 11,
  });

  const handleSearch = () => {
    axios
      .get(
        `https://rendezvous-backend.onrender.com/api/search?location=${searchTerm.toLowerCase()}`
      )
      .then((response) => {
        setFilteredResults(response.data);
        setRegion({
          longitude: response.data[0].longitude,
          latitude: response.data[0].latitude,
          longitudeDelta: 0.04,
          latitudeDelta: 0.04,
        });
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
      <MapScreen results={filteredResults} region={region} />
    </View>
  );
};

const stylesInLine = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#ffafcc",
    height: "100%",
    paddingTop: 40,
  },
});

export default Discover;
