import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Discover from "../screens/Discover";
import AddDate from "../screens/AddDate";
import Faves from "../screens/Faves";
import Profile from "../screens/Profile";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

const NavPanel = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "#ffafcc",
            height: "8%",
            paddingBottom: 10,
            paddingTop: 10,
            borderTopColor: "black",
            borderTopWidth: 2,
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
                color={focused ? "white" : "black"}
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
                color={focused ? "white" : "black"}
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
                color={focused ? "white" : "black"}
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
                color={focused ? "white" : "black"}
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
                color={focused ? "white" : "black"}
              />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "#ffafcc",
  },
});

export default NavPanel;
