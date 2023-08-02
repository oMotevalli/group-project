import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styling";
import WelcomeLogin from "./Components/WelcomeLogin";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeLogin />
      <StatusBar style="auto" />
    </View>
  );
}
