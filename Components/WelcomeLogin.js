import { StatusBar } from "expo-status-bar";
import styles from "../styling";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const WelcomeLogin = () => {
  const [fontsLoaded] = useFonts({
    PinkyStyle: require("../assets/fonts/PinkyStyle.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Rendezvous</Text>
      <Text style={styles.textStyle}>
        Home to dating ideas across the globe!
      </Text>
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
      <StatusBar style="auto" />
    </View>
  );
};

export default WelcomeLogin;
