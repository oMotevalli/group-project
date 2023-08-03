import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, Button, View } from "react-native";
import CustomHeader from "./Header";
import styles from "../../styling";

const CreateAccountScreen = () => {
  return (
    <View>
      <CustomHeader />
      <View style={styles.createAccountContainer}>
        <Text>Create Account</Text>
        <TextInput style={styles.caInputStyle} placeholder="Name"></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          secureTextEntry={true}
        ></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder="Confirm Password"
          secureTextEntry={true}
        ></TextInput>
        <Button color={"#573295"} title="Sign Up" />
        <Text style={styles.signUpStyle}>Already got an account?</Text>
        <Text>Sign in here!</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default CreateAccountScreen;
