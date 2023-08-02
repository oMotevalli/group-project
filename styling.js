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
  loginButtonContainer: {
    alignItems: "center",
  },
  loginButton: {
    elevation: 8,
    padding: 8,
    backgroundColor: "#a2d2ff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: "30%",
  },
  loginButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  noAccountText: {
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontSize: 12,
  },
});

export default styles;
