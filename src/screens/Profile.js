import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import CustomHeader from "./Header";
import styles from "../../styling";

const Profile = ({ navigation }) => {
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
        <Text>Name</Text>
        <Text>Username</Text>
        <Text>Email</Text>
        <TouchableOpacity>
          <Text>Update Password</Text>
        </TouchableOpacity>
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
