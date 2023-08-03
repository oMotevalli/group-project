import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import CustomHeader from "./Header";
import styles from "../../styling";

const CreateAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <CustomHeader />
      </View>
      <View style={styles.createAccountStyling}>
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
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signUpHereText}>Login here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAccountScreen;
