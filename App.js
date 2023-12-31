// SET UP //
// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import styles from "./styling";
import { View } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { UserProvider } from "./UserContext";

// SCREENS //
import WelcomeLogin from "./Components/WelcomeLogin";
import AllEvents from "./Components/AllEvents";
import EventDetails from "./Components/EventDetails";

import CreateAccountScreen from "./src/screens/CreateAccount";
import Discover from "./src/screens/Discover";
import Profile from "./src/screens/Profile";
import Home from "./src/screens/Home";
import AddDate from "./src/screens/AddDate";
import Faves from "./src/screens/Faves";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const NavTabs = () => {
  const [refreshEvents, setRefreshEvents] = useState(false);
  // const route = useRoute();
  // const { userId } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="AllEvents"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#4ea8de",
        tabBarStyle: {
          backgroundColor: "#a2d2ff",
          paddingTop: 5,
          paddingBottom: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={AllEvents}
        initialParams={{ refreshEvents: refreshEvents }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "white" : "#4ea8de"}
            />
          ),
        }}
      />
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
      />
      <Tab.Screen
        name={"Add Date"}
        component={AddDate}
        initialParams={{
          setRefreshEvents: setRefreshEvents,
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"plus"}
              size={25}
              color={focused ? "white" : "#4ea8de"}
            />
          ),
        }}
      />
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
      />
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
      />
    </Tab.Navigator>
  );
};

export default function App() {
  // const [userId, setUserId] = useState("");
  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={WelcomeLogin} />
          <Stack.Screen name="Create" component={CreateAccountScreen} />
          <Stack.Screen name="NavTabs" component={NavTabs} />
          <Stack.Screen name="EventDetails" component={EventDetails} />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}
