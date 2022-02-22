import React from "react";
import { View,StyleSheet,Image } from "react-native";
import { Card, Text,Layout,Button } from "@ui-kitten/components";
import InfoCardStyle from "./InfoCardStyle";



const Header = (title) => (
  <View>
    <Text category='h6'>{title}</Text>
  </View>
);



const InfoCard = props => {

  return(
  <React.Fragment>
  

    <Card style={styles.card} header={Header(props.title)}  onPress={props.onSelect} useForeground>
      
      <Image
          style={styles.tinyLogo}
          source={{uri: props.image}}
        />
    </Card>

  </React.Fragment>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
  tinyLogo: {
    width: '100%',
    height: 200,
  },
});
export default InfoCard;
