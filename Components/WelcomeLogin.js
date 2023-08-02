import styles from "../styling";
import { Text, View, TextInput, Button } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const WelcomeLogin = () => {
  const [fontsLoaded] = useFonts({
    PinkyStyle: require("./assets/fonts/PinkyStyle.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Rendezvous</Text>
      <Text style={styles.textStyle}>
        Home to dating ideas across the globe!
      </Text>
      <TextInput style={styles.inputStyle} placeholder="Username"></TextInput>
      <TextInput style={styles.inputStyle} placeholder="Password"></TextInput>
      <Button color={"#573295"} title={"Login"} />
      <StatusBar style="auto" />
    </View>
  );
};

export default WelcomeLogin;
