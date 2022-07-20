import React from "react";
import styled from "styled-components/native";
import { StatusBar, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.secondary};
  padding: ${props => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${props => props.theme.space[3]};
  flex: 1;
`;

export const RestaurantsScreen = () => (
  <>
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  </>
);