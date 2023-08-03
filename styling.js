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
    padding: 5,
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
    marginTop: 10,
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
  signUpStyle: {
    padding: 20,
  },
  createAccountContainer: {
    padding: 0,
    flex: 1,
    backgroundColor: "#fab1cc",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "black",
    margin: 40,
    borderRadius: 30,
  },
  caInputStyle: {
    margin: 10,
    padding: 10,
    width: "80%",
    backgroundColor: "#fff",
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 10,
  },
  createAccountStyling: {
    alignSelf: "center",
    alignItems: "center",
    height: 460,
    backgroundColor: "white",
    margin: 20,
    marginTop: 50,
    padding: 10,
    width: "80%",
    backgroundColor: "#cdb4db",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default styles;
