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

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    backgroundColor: "#fab1cc",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "black",
    margin: 40,
    borderRadius: 30,
  },
  headerStyle: {
    fontSize: 25,
  },
  textStyle: {
    fontSize: 50,
    color: "#fff",
    fontFamily: "monospace",
  },
  inputStyle: {
    margin: 10,
    padding: 10,
    width: "80%",
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  signUpStyle: {
    padding: 20,
  },
});

export default CreateAccountScreen;
