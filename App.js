// SET UP //
import { StatusBar } from "expo-status-bar";
import styles from "./styling";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// SCREENS //
// import NavPanel from "./src/components/NavPanel";
import WelcomeLogin from "./Components/WelcomeLogin";
import CreateAccountScreen from "./src/screens/CreateAccount";
import Discover from "./src/screens/Discover";
import Profile from "./src/screens/Profile";
import Home from "./src/screens/Home";
import AddDate from "./src/screens/AddDate";
import Faves from "./src/screens/Faves";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function Nav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#4ea8de",
        tabBarStyle: {
          backgroundColor: "#a2d2ff",
          height: "8%",
          paddingBottom: 10,
          paddingTop: 10,
          borderTopColor: "#a5a5a5",
          // borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "white" : "#4ea8de"}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={"Discover"}
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"search"}
              size={25}
              color={focused ? "white" : "#4ea8de"}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={"Add Date"}
        component={AddDate}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"plus"}
              size={25}
              color={focused ? "white" : "#4ea8de"}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={"Faves"}
        component={Faves}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"heart"}
              size={25}
              color={focused ? "white" : "#4ea8de"}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"user"}
              size={25}
              color={focused ? "white" : "#4ea8de"}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={WelcomeLogin} />
        <Stack.Screen name="Create" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Nav" component={Nav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
