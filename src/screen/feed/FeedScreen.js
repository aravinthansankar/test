import { Text, View, SafeAreaView, StyleSheet, Button,FlatList } from "react-native";
import React, { useState, useEffect, useCallback } from 'react';
import InfoCard from "../../components/Card/InfoCard";
import FeedScreenStyle from "./FeedScreenStyle";
import Inputfield from "../../components/Inputfield/Inputfield";
import { List } from "@ui-kitten/components";
import { useSelector, useDispatch } from 'react-redux';
import * as feedActions from '../../redux/actions/feedActions'


const FeedScreen = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const {Feeds} = useSelector(state => state.feedReducer);
 

  return (
    <SafeAreaView style={FeedScreenStyle.container}>
      <View style={FeedScreenStyle.topContainer}>
        <View style={FeedScreenStyle.inputLayout}>
          <Inputfield />
        </View>
      </View>

      <View style={FeedScreenStyle.midContainer}>
        <List style={styles.container} data={Feeds} keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          
           <Text>{item.list.title}</Text>
        )} />
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
export default FeedScreen;






