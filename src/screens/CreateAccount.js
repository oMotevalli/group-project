import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import CustomHeader from "./Header";
import styles from "../../styling";
import { useState, useEffect } from "react";
import axios from "axios";

const CreateAccountScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const createAlert = () => {
    Alert.alert(
      "Welcome!",
      "Your account has been created! Press ok to log in",
      [{ text: "OK", onPress: () => navigation.navigate("Login") }]
    );
  };

  const body = {
    full_name: firstName,
    username: username,
    email: email,
    password: password,
  };

  const onSignUp = () => {
    setIsLoading(true);
    axios
      .post("https://rendezvous-backend.onrender.com/api/users", body)
      .then(() => {
        setIsLoading(false);
        createAlert();
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        console.log(err);
      });
  };
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 22 }}>
          Creating your account, please wait...
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View>
        <CustomHeader />
      </View>
      {error && (
        <Text style={{ textAlign: "center", color: "red" }}>
          Upsss.. Something went wrong please try again
        </Text>
      )}
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
        <TextInput
          placeholder="Full Name"
          style={styles.inputStyle}
          onChangeText={(newText) => setFirstName(newText)}
          autoCapitalize="none"
          onFocus={() => setError(false)}
        ></TextInput>

        <TextInput
          placeholder="Username"
          style={styles.inputStyle}
          onChangeText={(newText) => {
            setUsername(newText);
          }}
          autoCapitalize="none"
        ></TextInput>
        <TextInput
          placeholder="Email"
          style={styles.inputStyle}
          onChangeText={(newText) => setEmail(newText)}
          autoCapitalize="none"
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.inputStyle}
          onChangeText={(newText) => setPassword(newText)}
          autoCapitalize="none"
        ></TextInput>

        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => onSignUp()}
          >
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
