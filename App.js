import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styling";
import NavPanel from "./src/components/NavPanel";
import WelcomeLogin from "./Components/WelcomeLogin";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeLogin />
      <NavPanel />
      <StatusBar style="auto" />
    </View>
  );
}
