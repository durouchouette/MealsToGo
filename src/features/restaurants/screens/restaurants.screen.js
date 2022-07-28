import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../../../components/favorite/favorites-bar.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`
`;

const Loading = styled(ActivityIndicator)`
  color: pink;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const {restaurants, isLoading, error } = useContext(RestaurantsContext);
  const {favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <SafeArea>
        <Search 
          isFavoritesToggled={isToggled}
          onFavoritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
        )}
        {isLoading && <Loading animating={true} />}
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return ( 
              <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant: item,
                })
              }
            >
                <RestaurantInfoCard restaurant={item}/> 
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};