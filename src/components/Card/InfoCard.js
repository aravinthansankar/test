import React from "react";
import { View } from "react-native";
import { Card, Text } from "@ui-kitten/components";
import InfoCardStyle from "./InfoCardStyle";

const InfoCard = props => {
  return (
    <Card>
      <Text>
       {props.title}
      </Text>
    </Card>
  );
};
export default InfoCard;
