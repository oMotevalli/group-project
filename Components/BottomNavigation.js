// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./AllEvents";
import Search from "./Search";
import Profile from "./Profile";
import Favourites from "./Favourites";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import React from "react";

// const Tab = createBottomTabNavigator();
const Tab = createNativeStackNavigator();

function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Home" component={Home} /> */}

        {/* <Tab.Screen name="Search" component={Search} /> */}
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      {/* <Tab.Navigator>
      </Tab.Navigator> */}

      {/* <Tab.Screen name="Add a Date" component={AddADate} /> */}
      {/* {/* <Tab.Screen name="Favourites" component={Favourites} /> */}
    </NavigationContainer>
  );
}

export default BottomNavigation;
