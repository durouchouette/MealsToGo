import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
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
    return (
      <>
        <SafeArea>
          <Search></Search>
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