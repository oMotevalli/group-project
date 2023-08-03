import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "red" }}>
      <Tab.Screen name={"test1"} component={test1}></Tab.Screen>
      <Tab.Screen name={"test2"} component={test2}></Tab.Screen>
      <Tab.Screen name={"test3"} component={test3}></Tab.Screen>
      <Tab.Screen name={"test4"} component={test4}></Tab.Screen>
      <Tab.Screen name={"test5"} component={test5}></Tab.Screen>
    </Tab.Navigator>
  );
};

const test1 = () => {
  return <Text>TEST1</Text>;
};

const test2 = () => {
  return <Text>TEST2</Text>;
};

const test3 = () => {
  return <Text>TEST3</Text>;
};

const test4 = () => {
  return <Text>TEST4</Text>;
};

const test5 = () => {
  return <Text>TEST5</Text>;
};
export default TabNav;
