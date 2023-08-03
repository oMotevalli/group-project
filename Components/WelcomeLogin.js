import { StatusBar } from "expo-status-bar";
import styles from "../styling";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import CustomHeader from "./Header";

const WelcomeLogin = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputStyle} placeholder="Username"></TextInput>
        <TextInput style={styles.inputStyle} placeholder="Password"></TextInput>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.noAccountText}>Don't have an account?</Text>
      <Text style={styles.signUpHereText}>Sign up here!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default WelcomeLogin;
