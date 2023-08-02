import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, StyleSheet, Button, View } from "react-native";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Sign In</Text>
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
      <Button color={"#573295"} title={"Login"} />
      <Text style={styles.signUpStyle}>Don't have an account?</Text>
      <Text>Sign up here!</Text>
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
    borderWidth: 2,
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
    margin: 20,
    padding: 10,
    width: "80%",
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  signUpStyle: {
    padding: 20,
  },
});

export default SignInScreen;
