import React from "react";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

 const SettingsStack = createStackNavigator();

 export const SettingsNavigator = () => {
   return (
     <SettingsStack.Navigator>
       <SettingsStack.Screen
         name="Settings"
         component={SettingsScreen}
       />
      <SettingsStack.Screen
         name="Favorites"
         component={FavoritesScreen} 
       />
     </SettingsStack.Navigator>
   );
 };