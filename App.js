import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Button } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import styles from "./styling";
import WelcomeLogin from "./Components/WelcomeLogin";

export default function App() {
  const [fontsLoaded] = useFonts({
    PinkyStyle: require("./assets/fonts/PinkyStyle.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <WelcomeLogin />
      <StatusBar style="auto" />
    </View>
  );
}
