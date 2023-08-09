import { StatusBar } from "expo-status-bar";
import styles from "../styling";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import CustomHeader from "../src/screens/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../UserContext";

const WelcomeLogin = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState();
  const [isNotCorrect, setIsNotCorrect] = useState(false);
  const [refreshDb, setRefreshDb] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const { setUser } = useUserContext();
  useEffect(() => {
    axios
      .get("https://rendezvous-backend.onrender.com/api/users")
      .then(({ data }) => {
        setUsers(data.users);
      });
  }, [refreshDb]);
  const handleLogin = () => {
    let foundUser = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        foundUser = true;
      }
    }
    if (foundUser) {
      setUserFound(true);
      setIsNotCorrect(false);
      navigation.navigate("NavTabs");
    } else {
      setIsNotCorrect(true);
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Username"
          onFocus={() => {
            setIsNotCorrect(false);
            refreshDb ? setRefreshDb(false) : setRefreshDb(true);
          }}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardAppearance="default"
          onChangeText={(newText) => setUsername(newText)}
        ></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          onFocus={() => setIsNotCorrect(false)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardAppearance="default"
          secureTextEntry={true}
          onChangeText={(newText) => setPassword(newText)}
        ></TextInput>
      </View>
      <View style={{ alignItems: "center" }}>
        {isNotCorrect && (
          <Text style={{ fontSize: 10, color: "red" }}>
            Username or Password is not correct!
          </Text>
        )}
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleLogin()}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.noAccountText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Text style={styles.signUpHereText}>Sign up here!</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default WelcomeLogin;
