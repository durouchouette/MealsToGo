import React from "react";
 import { Text } from "react-native";
 export const favoritesBar = () => <Text>favorites Bar</Text>;
 import { ScrollView, TouchableOpacity } from "react-native";
 import styled from "styled-components/native";
 import { Spacer } from "../spacer/spacer.component";

 import { CompactRestaurantInfo } from "../../features/restaurants/components/compact-restaurant-info.component";

 const FavoritesWrapper = styled.View`
   padding: 10px;
 `;
 export const FavoritesBar = ({ favorites, onNavigate }) => {
   if (!favorites.length) {
     return null;
   }
   return (
     <FavoritesWrapper>
       <Spacer variant="left.large">
         <Text variant="caption">Favorites</Text>
       </Spacer>

       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {favorites.map((restaurant) => {
           const key = restaurant.name;
           return (
             <Spacer key={key} position="left" size="medium">
               <TouchableOpacity
                 onPress={() =>
                   onNavigate("RestaurantDetails", {
                     restaurant,
                   })
                 }
               >
                 <CompactRestaurantInfo restaurant={restaurant} />
               </TouchableOpacity>
             </Spacer>
           );
         })}
       </ScrollView>
     </FavoritesWrapper>
   );
 };