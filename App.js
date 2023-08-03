import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styling";
import WelcomeLogin from "./Components/WelcomeLogin";
import CreateAccountScreen from "./Components/CreateAccount";

export default function App() {
  return (
    <View style={styles.container}>
      <CreateAccountScreen />
      <StatusBar style="auto" />
    </View>
  );
}
