import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffafcc",
    justifyContent: "center",
    textAlign: "center",
  },
  headerStyle: {
    fontSize: 60,
    color: "#fff",
    fontFamily: "PinkyStyle",
    textAlign: "center",
  },
  textStyle: {
    color: "#fff",
    fontFamily: "helvetica",
    fontSize: 14,
    textAlign: "center",
  },
  inputContainer: {
    flex: 0,
    alignItems: "center",
    margin: 15,
  },
  inputStyle: {
    margin: 10,
    padding: 10,
    width: "80%",
    backgroundColor: "#fff",
  },
  loginButton: {
    backgroundColor: "#a2d2ff",
  },
});

export default styles;
