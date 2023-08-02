import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Rendezvous</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        secureTextEntry={true}
      ></TextInput>
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
    fontFamily: "Montserrat",
  },
  inputStyle: {
    margin: 20,
    padding: 10,
    width: "80%",
    backgroundColor: "#fff",
  },
});
