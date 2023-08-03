import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styling";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Discover from "./src/screens/Discover";
import AddDate from "./src/screens/AddDate";
import Faves from "./src/screens/Faves";
import Profile from "./src/screens/Profile";
import { Feather } from "@expo/vector-icons";
import NavPanel from "./src/components/NavPanel";

const Tab = createBottomTabNavigator();

export default function App() {
  return <NavPanel />;
}
