import React from "react";
import { Text, View } from "react-native";
import CustomHeader from "./Header";

const Profile = () => {
  return (
    <View style={{ backgroundColor: "#ffafcc", height: "100%" }}>
      <CustomHeader />
      <View style={{ height: "20%", backgroundColor: "white", margin: 20 }}>
        <Text>Name</Text>
        <Text>Username</Text>
        <Text>Email</Text>
      </View>
    </View>
  );
};

export default Profile;
