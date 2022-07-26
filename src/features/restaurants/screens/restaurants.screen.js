import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from 'react-native';
import { ActivityIndicator, Searchbar } from 'react-native-paper';

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.secondary};
  padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`
`;

const Loading = styled(ActivityIndicator)`
  color: pink;
`;

export const RestaurantsScreen = () => {
    const {restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
      <>
        <SafeArea>
          <SearchContainer>
            <Searchbar />
          </SearchContainer>
          {isLoading && <Loading animating={true} />}
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return ( <RestaurantInfoCard restaurant={item}/> );
            }}
            keyExtractor={(item) => item.name}
          />
        </SafeArea>
      </>
  );
};