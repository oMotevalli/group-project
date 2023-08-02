import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    PinkyStyle: require("./assets/fonts/PinkyStyle.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Rendezvous</Text>
      <TextInput style={styles.inputStyle} placeholder="Username"></TextInput>
      <TextInput style={styles.inputStyle} placeholder="Password"></TextInput>
      <Button color={"#573295"} title={"Login"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffafcc",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 50,
    color: "#fff",
    fontFamily: "PinkyStyle",
  },
  inputStyle: {
    margin: 20,
    padding: 10,
    width: "80%",
    backgroundColor: "#fff",
  },
});
