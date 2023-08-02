import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Header from "./src/components/Header";
import SignUpScreen from "./src/Screens/SignUpScreen";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header />
      <SignUpScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#f779a7",
    height: "100%",
  },
});
