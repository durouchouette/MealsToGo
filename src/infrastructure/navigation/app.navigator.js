import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    activeTintColor: "blue",
    inactiveTintColor: "gray",
    headerShown: false
  };
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      {/* <Tab.Screen name="Map" component={RestaurantsNavigator} /> */}
      {/* <Tab.Screen name="Settings" component={RestaurantsNavigator} /> */}
    </Tab.Navigator>
  );
};