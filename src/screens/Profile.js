import React, { useState } from "react";
import axios from "axios";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import CustomHeader from "./Header";
import styles from "../../styling";
import { useUserContext } from "../../UserContext";

const Profile = ({ navigation }) => {
  const { user } = useUserContext();
  const [newPassword, setNewPassword] = useState("");
  const { userId, firstname, username, email } = user;
  console.log(firstname, "first<<<");

  const updatePassword = ({ username }) => {
    axios.patch(
      `https://rendezvous-backend.onrender.com/api/users/${username}`,
      { password: newPassword }
    );
    console.log("success!");
  };
  return (
    <View style={stylesInLine.pageContainer}>
      <CustomHeader />
      <View style={styles.createAccountStyling}>
        {/* change name of styling to make more generic */}
        <View style={{ padding: 20 }}>
          <Image
            source={require("../../assets/avatar.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              borderColor: "#fff",
              borderWidth: 1,
            }}
          />
        </View>
        <Text>Username: {user.username}</Text>
        <Text>Name: {user.firstname}</Text>
        <Text>Email: {user.email}</Text>
        <TextInput
          placeholder="Enter new password"
          style={styles.caInputStyle}
          onChangeText={setNewPassword}
        />
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={updatePassword}>
            <Text style={styles.loginButtonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* these will all be props... */}
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
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

export default Profile;
