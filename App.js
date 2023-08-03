import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styling";
import NavPanel from "./src/components/NavPanel";
import WelcomeLogin from "./Components/WelcomeLogin";
import CreateAccountScreen from "./Components/CreateAccount";

export default function App() {
  return (
    <View style={styles.container}>
      <CreateAccountScreen />
      <WelcomeLogin />
      <NavPanel />
      <StatusBar style="auto" />
    </View>
  );
}
