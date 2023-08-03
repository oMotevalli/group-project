import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffafcc",
    justifyContent: "center",
    textAlign: "center",
  },
  headerStyle: {
    fontSize: 70,
    color: "#fff",
    fontFamily: "PinkyStyle",
    textAlign: "center",
  },
  textStyle: {
    color: "#fff",
    fontFamily: "helvetica",
    fontSize: 16,
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
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 10,
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
    fontSize: 16,
  },
  noAccountText: {
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontSize: 16,
  },
  signUpHereText: {
    color: "#fff",
    textAlign: "center",
    padding: 0,
    fontSize: 14,
    margin: -8,
    textDecorationLine: "underline",
  },
});

export default styles;
