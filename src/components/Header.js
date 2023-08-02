import { StatusBar } from "expo-status-bar";
// import styles from "../styling";
import { Text, View, StyleSheet } from "react-native";
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

const Header = () => {
  //   const [fontsLoaded] = useFonts({
  //     PinkyStyle: require("../../assets/fonts/PinkyStyle"),
  //   });

  //   if (!fontsLoaded) {
  //     return <AppLoading />;
  //   }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerStyle}>Rendezvous</Text>
      <Text style={styles.slogan}>Home to dating ideas across the globe!</Text>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    margin: 20,
    color: "black",
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },
  slogan: {
    color: "black",
    fontSize: 25,
    fontFamily: "sans-serif-thin",
  },
});

export default Header;
