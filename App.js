// SET UP //
import { StatusBar } from "expo-status-bar";
import styles from "./styling";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// TEST //

// import LandingScreen from "./src/drafts/LandingScreen";
// import About from "./src/drafts/About";
// SCREENS //
import NavPanel from "./src/components/NavPanel";
import WelcomeLogin from "./Components/WelcomeLogin";
import CreateAccountScreen from "./src/screens/CreateAccount";
import Discover from "./src/screens/Discover";
import Profile from "./src/screens/Profile";
import Home from "./src/screens/Home";
import AddDate from "./src/screens/AddDate";
import Faves from "./src/screens/Faves";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const NavTabs = () => {
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
  </Tab.Navigator>;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={WelcomeLogin} />
        <Stack.Screen name="Create" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NavTabs" component={NavTabs} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavPanel />
  );
}

// *********************************************************

// const TabNav = () => {
//   return (
//     <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "red" }}>
//       <Tab.Screen name={"test1"} component={test1}></Tab.Screen>
//       <Tab.Screen name={"test2"} component={test2}></Tab.Screen>
//       <Tab.Screen name={"test3"} component={test3}></Tab.Screen>
//       <Tab.Screen name={"test4"} component={test4}></Tab.Screen>
//       <Tab.Screen name={"test5"} component={test5}></Tab.Screen>
//     </Tab.Navigator>
//   );
// };

// const test1 = () => {
//   return <Text>TEST1</Text>;
// };

// const test2 = () => {
//   return <Text>TEST2</Text>;
// };

// const test3 = () => {
//   return <Text>TEST3</Text>;
// };

// const test4 = () => {
//   return <Text>TEST4</Text>;
// };

// const test5 = () => {
//   return <Text>TEST5</Text>;
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Tabs">
//         <Stack.Screen name="LandingPoo" component={LandingScreen} />
//         <Stack.Screen name="About" component={About} />
//         <Stack.Screen name="Tabs" component={TabNav} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
