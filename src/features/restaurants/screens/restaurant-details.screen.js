import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from 'react-native-paper';

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailsScreen = ({ route }) => {

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
   const [lunchExpanded, setLunchExpanded] = useState(false);
   const [dinnerExpanded, setDinnerExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion 
            title="Breakfast"
            left={props => <List.Icon {...props} icon="muffin" 
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)} />}>
              <List.Item title="Pancakes" />
              <List.Item title="Waffles" />
              <List.Item title="Oatmeal" />
          </List.Accordion>
          <List.Accordion 
            title="Lunch"
            left={props => <List.Icon {...props} icon="food" 
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)} />}>
              <List.Item title="Pancakes" />
              <List.Item title="Waffles" />
              <List.Item title="Oatmeal" />
          </List.Accordion>
          <List.Accordion 
            title="Dinner"
            left={props => <List.Icon {...props} icon="pizza" 
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)} />}>
              <List.Item title="Pancakes" />
              <List.Item title="Waffles" />
              <List.Item title="Oatmeal" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};