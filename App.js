import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styling";
import WelcomeLogin from "./Components/WelcomeLogin";
import BottomNavigation from "./Components/BottomNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeLogin />
      <BottomNavigation />
      <StatusBar style="auto" />
    </View>
  );
}
