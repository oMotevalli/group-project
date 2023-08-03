import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./LandingScreen";
import About from "./About";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen name={"LandingScreen"} component={LandingScreen} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default MainStack;
