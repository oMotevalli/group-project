import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styling";
import MapScreen from "./src/screens/MapScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <MapScreen />
    </View>
  );
}
