import { createBottomTabNavigator } from "react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Add a Date" component={AddADate} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
