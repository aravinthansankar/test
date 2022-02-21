import { Text, View, SafeAreaView, StyleSheet, Button,FlatList } from "react-native";
import React, { useState, useEffect, useCallback } from 'react';
import InfoCard from "../../components/Card/InfoCard";
import FeedScreenStyle from "./FeedScreenStyle";
import Inputfield from "../../components/Inputfield/Inputfield";
import { List } from "@ui-kitten/components";
import { useSelector, useDispatch } from 'react-redux';
import * as feedActions from '../../redux/actions/feedActions'
import {connect} from "react-redux";
import { useNavigation , useRoute} from "@react-navigation/native"


const FeedScreen = props => {

 

  const navigation = useNavigation();
 
  const selectItemHandler = (id, title,description,embed_url) => {

    navigation.navigate('InfoScreen',{
      title:title,
      Id:id,
      Description:description,
      Embed_url:embed_url,
    })
  };

  return (
    <SafeAreaView style={FeedScreenStyle.container}>
      {console.log(props.pictures_arr)}
      <View style={FeedScreenStyle.topContainer}>
        <View style={FeedScreenStyle.inputLayout}>
          <Inputfield />
        </View>
      </View>

      <View style={FeedScreenStyle.midContainer}>
        {props.pictures_arr.list?
        <FlatList style={styles.container} data={props.pictures_arr.list} keyExtractor={item => item.id.toString()}
       renderItem={({item}) => (
          <InfoCard title={item.title} image={item.thumbnail_480_url}  onSelect={() => {
            selectItemHandler(item.id, item.title, item.description, item.embed_url);
          }}  />
          
       )} />
        :<View>


        </View>

        }
       
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
const mapStateToProps = (state ) => {
  return {
  
  pictures_arr:state.feedReducer.availableFeed
  }
}


const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    
  //   get_data_final: 
  //  ()=>
  //   dispatch(  get_data()),
  
  
  
  }}

  export default connect(mapStateToProps,mapDispatchToProps)(FeedScreen)



//   <ProductItem
//   image={itemData.item.imageUrl}
//   title={itemData.item.title}
//   price={itemData.item.price}
//   onSelect={() => {
//     selectItemHandler(itemData.item.id, itemData.item.title);
//   }}
// >

//title={item.title} description={item.description} image={item.thumbnail_480_url} duration={item.duration} 