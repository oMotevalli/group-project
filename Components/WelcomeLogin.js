import { StatusBar } from "expo-status-bar";
import styles from "../styling";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import CustomHeader from "../src/screens/Header";

const WelcomeLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputStyle} placeholder="Username"></TextInput>
        <TextInput style={styles.inputStyle} placeholder="Password"></TextInput>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("NavTabs")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.noAccountText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Text style={styles.signUpHereText}>Sign up here!</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default WelcomeLogin;
