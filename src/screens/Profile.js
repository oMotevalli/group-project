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
        <View style={{ padding: 20, alignSelf: "flex-end" }}>
          <Image
            source={require("../../assets/profilePic.png")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              borderColor: "#fff",
              borderWidth: 2,
            }}
          />
        </View>
        <View>
          <TouchableOpacity onPress={updatePassword}>
            <Text
              style={{
                fontSize: 12,
                color: "#fff",
                textDecorationLine: "underline",
                marginBottom: 20,
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 20,
            borderColor: "#4ea8de",
            borderRadius: 15,
            justifyContent: "center",
            backgroundColor: "#fff",
            width: 280,
          }}
        >
          <Text style={{ marginBottom: 3 }}>Username: Milosz123</Text>
          <Text style={{ marginBottom: 3 }}>Name: Milosz Slezak</Text>
          <Text style={{ marginBottom: 0 }}>Email: milosz123@gmail.com</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 20,
            borderColor: "#4ea8de",
            borderRadius: 15,
            justifyContent: "center",
            backgroundColor: "#fff",
            width: 280,
            marginTop: 10,
          }}
        >
          <Text style={{ marginBottom: 10 }}>My kinda dates:</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 5,
            }}
          >
            <Text style={{ borderWidth: 1, borderRadius: 5, padding: 3 }}>
              Food
            </Text>
            <Text style={{ borderWidth: 1, borderRadius: 5, padding: 3 }}>
              Music
            </Text>
            <Text style={{ borderWidth: 1, borderRadius: 5, padding: 3 }}>
              Ambient
            </Text>
            <Text style={{ borderWidth: 1, borderRadius: 5, padding: 3 }}>
              Indoors
            </Text>
            <Text style={{ borderWidth: 1, borderRadius: 5, padding: 3 }}>
              Adventurous
            </Text>
            <Text style={{ borderWidth: 1, borderRadius: 5, padding: 3 }}>
              Cocktails
            </Text>
            <Text
              style={{
                borderWidth: 1,
                borderRadius: 5,
                padding: 3,
                width: 55,
                textAlign: "center",
              }}
            >
              +
            </Text>
          </View>
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
