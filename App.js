import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styling";
import WelcomeLogin from "./Components/WelcomeLogin";
import BottomNavigation from "./Components/BottomNavigation";
import AllEvents from "./Components/AllEvents";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetails from "./Components/EventDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllEvents" component={AllEvents} />
        <Stack.Screen name="EventDetails" component={EventDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
