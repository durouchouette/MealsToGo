import React from "react";
import styled from "styled-components/native";
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Title = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.body}
  color: ${props => props.theme.colors.ui.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption}
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

// eslint-disable-next-line react/prop-types
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "A restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn.vox-cdn.com/thumbor/K0mlPochJ-e6O-O6lALji5QC2Jc=/0x0:2000x1334/1820x1213/filters:focal(840x507:1160x827):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61180053/junior2.0.0.1505113718.0.jpg"
    ],
    address = "The address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return( 
  <RestaurantCard elevation={1}>
    <RestaurantCardCover key={name} source={{ uri: photos[0] }} /> 
    <Info>
      <Title>{name}</Title>
      <Section>
        <Rating>
          {/* {ratingArray.map(() => (
               <SvgXml xml={star} width={20} height={20} />
          ))} */}
        </Rating>
        <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
      </Section>
      <Address>{address}</Address>
    </Info>
  </RestaurantCard>
  );
}; 