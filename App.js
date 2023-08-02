import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styling";
import MapPage from "./src/screens/MapPage";

export default function App() {
  return (
    <View style={styles.container}>
      <MapPage />
    </View>
  );
}
