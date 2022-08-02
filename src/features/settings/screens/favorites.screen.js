import React, { useContext } from "react";

import styled from "styled-components/native";

import { FlatList, TouchableOpacity } from 'react-native';

import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

import { FavoritesContext } from "../../../services/favorites/favorites.context";

import { Text } from "../../../components/typography/text.component";

const FavoriteList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`
`;

export const FavoritesScreen = ({ navigation }) => {
  const {favorites} = useContext(FavoritesContext);

  return (
    favorites.length ? (
      <SafeArea>
      <FavoriteList
        data={favorites}
        renderItem={({ item }) => {
          return ( 
            <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetails", {
                restaurant: item,
              })
            }
            >
              <RestaurantInfoCard restaurant={item} /> 
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
      </SafeArea>
    ) : (
      <SafeArea>
        <Text center>You don t have favorites yet</Text>
      </SafeArea>
    )
  )
};