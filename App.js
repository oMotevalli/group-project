import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Header from "./src/components/Header";
import SignInScreen from "./src/Screens/SignInScreen";
import CreateAccountScreen from "./src/Screens/CreateAccountScreen";
export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header />
      {/* <SignInScreen /> */}
      <CreateAccountScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#f779a7",
    height: "100%",
  },
});
