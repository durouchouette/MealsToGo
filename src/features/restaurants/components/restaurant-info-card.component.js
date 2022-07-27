import React from "react";
import { SvgXml } from 'react-native-svg';
import { Spacer } from "../../../components/spacer/spacer.component";

import { Text } from "../../../components/typography/text.component"
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { 
  RestaurantCardCover, 
  RestaurantCard, 
  Info, 
  Section, 
  Rating, 
  SectionEnd, 
  Icon } from "./restaurant-info-cards.styles"


// eslint-disable-next-line react/prop-types
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Prout",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn.vox-cdn.com/thumbor/K0mlPochJ-e6O-O6lALji5QC2Jc=/0x0:2000x1334/1820x1213/filters:focal(840x507:1160x827):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61180053/junior2.0.0.1505113718.0.jpg"
    ],
    address = "The address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return( 
  <RestaurantCard elevation={1}>
    <RestaurantCardCover key={name} source={{ uri: photos[0] }} /> 
    <Info>
      <Text variant="label">{name}</Text>
      <Section>
        <Rating>
          {ratingArray.map((_, i) => (
               <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label">
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
      </Section>
      <Text variant="caption">{address}</Text>
    </Info>
  </RestaurantCard>
  );
}; 