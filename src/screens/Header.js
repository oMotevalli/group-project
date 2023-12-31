import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import styles from "../../styling";
import { Text, View } from "react-native";

const CustomHeader = () => {
  const [fontsLoaded] = useFonts({
    PinkyStyle: require("../../assets/fonts/PinkyStyle.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Text style={styles.headerStyle}>Rendezvous</Text>
      <Text style={styles.textStyle}>
        Home to dating ideas across the globe!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default CustomHeader;
