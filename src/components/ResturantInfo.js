import React from "react";
import { View } from "react-native";

import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import open from "../../assets/open";

export default function ResturantInfo({ resturant = {} }) {
  const {
    name = "Uenr Cafe",
    icon,
    photos = [
      "https://thebeaconauburn.com/wp-content/uploads/2021/08/A-Group-of-People-Eating-Food-at-a-Restaurant.jpeg",
    ],
    address = "100 some miles",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = resturant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }}></Card.Cover>
      <Title>{name}</Title>
      {/* maping the rating to the stars */}

      <Section>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={30} height={30} />
          ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variat="label" style={{ color: "red" }}>
              Close Temporarily
            </Text>
          )}
          <View style={{ paddingLife: 16 }} />
          {isOpenNow && <Open xml={open} width={30} height={30} />}
        </SectionEnd>
      </Section>
      <Title>{address}</Title>
    </RestaurantCard>
  );
}

const Title = styled.Text`
  padding: 16px;
`;

const RestaurantCard = styled(Card)`
  margin-bottom: 16px;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Text = styled.Text``;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
  padding: 20px;
`;
