import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, StyleSheet, Button, View } from "react-native";

const CreateAccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Create Account</Text>
      <TextInput style={styles.inputStyle} placeholder="Name"></TextInput>
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
  );
};

export default CreateAccountScreen;
