import React from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import CustomHeader from "./Header";
import styles from "../../styling";
import { useState, useEffect } from "react";
import axios from "axios";

const AddDate = ({ navigation, route }) => {
  console.log(route);
  const setRefresh = route.params.setRefreshEvents;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postcode, setPostcode] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("Milosz123");

  useEffect(() => {
    axios
      .get(`https://api.postcodes.io/postcodes/${postcode}`)
      .then(({ data }) => {
        setLatitude(data.result.latitude);
        setLongitude(data.result.longitude);
        setLocation(data.result.admin_district);
      });
  }, [postcode]);
  const addIdea = () => {
    const body = {
      title: title,
      location: location,
      address: address,
      type: type,
      description: description,
      latitude: latitude,
      longitude: longitude,
      price: Number(price),
      opening_time: openingTime,
      closing_time: closingTime,
      image_url: imgUrl,
      username: username,
    };
    axios
      .post("https://rendezvous-backend.onrender.com/api/user_ideas", body)
      .then(() => {
        console.log("Success!!");
        createAlert();
        setRefresh(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createAlert = () => {
    Alert.alert("Rendezvous!", "Your date idea has been added!", [
      { text: "OK", onPress: () => navigation.navigate("Home") },
    ]);
  };
  return (
    <View style={styles.container}>
      <View>
        <CustomHeader />
      </View>

      <View style={styles.addDateIdeaContainer}>
        <Text
          style={{
            color: "#fff",
            fontSize: 25,
            margin: 20,
            fontWeight: "bold",
          }}
        >
          Add your date idea
        </Text>
        <TextInput
          placeholder="Name of the event/activity"
          style={styles.inputStyle}
          onChangeText={(newText) => setTitle(newText)}
          autoCapitalize="none"
          onFocus={() => setRefresh(false)}
        ></TextInput>
        <TextInput
          placeholder="Description of event/activity"
          style={styles.inputStyle}
          onChangeText={(newText) => setDescription(newText)}
          autoCapitalize="none"
        ></TextInput>
        <TextInput
          placeholder="Address"
          style={styles.inputStyle}
          onChangeText={(newText) => setAddress(newText)}
          autoCapitalize="none"
        ></TextInput>
        <TextInput
          placeholder="Post Code eg. HY7 8DE"
          style={styles.inputStyle}
          onChangeText={(newText) => setPostcode(newText)}
          keyboardType="number-pad"
        ></TextInput>
        <TextInput
          placeholder="Date type tags"
          style={styles.inputStyle}
          onChangeText={(newText) => setType(newText)}
          autoCapitalize="none"
        ></TextInput>
        <TextInput
          placeholder="Price range"
          style={styles.inputStyle}
          onChangeText={(newText) => {
            setPrice(newText);
          }}
          autoCapitalize="none"
        ></TextInput>
        <TextInput
          placeholder="Event start time"
          style={styles.inputStyle}
          onChangeText={(newText) => setOpeningTime(newText)}
          autoCapitalize="none"
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          placeholder="Event finish time"
          style={styles.inputStyle}
          onChangeText={(newText) => setClosingTime(newText)}
          autoCapitalize="none"
        ></TextInput>
        <TextInput
          placeholder="Image url"
          style={styles.inputStyle}
          onChangeText={(newText) => setImgUrl(newText)}
          autoCapitalize="none"
        ></TextInput>

        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => addIdea()}
          >
            <Text style={styles.loginButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddDate;
