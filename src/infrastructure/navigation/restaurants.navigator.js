import React from "react";

 import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

 import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
 import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details.screen";

 const RestaurantStack = createStackNavigator();

 export const RestaurantsNavigator = () => {
   return (
     <RestaurantStack.Navigator 
        screenOptions={{
          ...TransitionPresets.ModalPresentationIOS,
          headerShown: false
        }}>
       <RestaurantStack.Screen
         name="Restaurants"
         component={RestaurantsScreen}
       />
      <RestaurantStack.Screen
         name="RestaurantDetails"
         component={RestaurantDetailsScreen} 
       />
     </RestaurantStack.Navigator>
   );
 };