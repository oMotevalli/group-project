import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import CustomHeader from "./Header";
import styles from "../../styling";

const CreateAccountScreen = () => {
  return (
    <View>
      <View>
        <CustomHeader />
      </View>
      <View
        style={{
          alignSelf: "center",
          alignItems: "center",
          height: 460,
          backgroundColor: "white",
          margin: 20,
          marginTop: 50,
          padding: 10,
          width: "80%",
          backgroundColor: "#cdb4db",
          borderColor: "#fff",
          borderWidth: 1,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 25,
            margin: 20,
            fontWeight: "bold",
          }}
        >
          Create Account
        </Text>
        <TextInput placeholder="Username" style={styles.inputStyle}></TextInput>
        <TextInput placeholder="Email" style={styles.inputStyle}></TextInput>
        <TextInput placeholder="Password" style={styles.inputStyle}></TextInput>
        <TextInput
          placeholder="Confirm password"
          style={styles.inputStyle}
        ></TextInput>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.noAccountText}>Already got an account?</Text>
        <Text style={styles.signUpHereText}>Login here!</Text>
      </View>
    </View>
  );
};

export default CreateAccountScreen;
