import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import InfoCard from "../../components/Card/InfoCard";
import FeedScreenStyle from "./FeedScreenStyle";
import Inputfield from "../../components/Inputfield/Inputfield";
import { List } from "@ui-kitten/components";
import { useSelector, useDispatch } from "react-redux";
import * as feedActions from "../../redux/actions/feedActions";
import { connect } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

const FeedScreen = (props) => {
  const [input, setinput] = useState();
  const [renderFlatlist, setrenderFlatlist] = useState([]);
  const [page, setpage] = useState(2);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const selectItemHandler = (id, title, description, embed_url) => {
    navigation.navigate("InfoScreen", {
      title: title,
      Id: id,
      Description: description,
      Embed_url: embed_url,
    });
  };
  const handleCallback = (a) => {
    console.log("Awais>>>>>>>>>>>>....", a);
    setpage(2);
    setinput(a);
  };
  const load_more = () => {
    setpage(page + 1);
    console.log("pa>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", page);
    dispatch(feedActions.fetchFeed_2(input, page));
  };

  const ViewRender = ({ item }) => {
  //  setrenderFlatlist(item);
    console.log(item);
    if (item.title && item.thumbnail_480_url) {
      return (
        <InfoCard
          title={item.title}
          image={item.thumbnail_480_url}
          onSelect={() => {
            selectItemHandler(
              item.id,
              item.title,
              item.description,
              item.embed_url
            );
          }}
        />
      );
    }
    else if(!item.thumbnail_480_url) {
      return (
        <InfoCard
          title={item.title}
          image={'https://thedietologist.com.au/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg'}
          onSelect={() => {
            selectItemHandler(
              item.id,
              item.title,
              item.description,
              item.embed_url
            );
          }}
        />
      );
    }
  };
useEffect(() => {
  console.log(props.pictures_arr);
}, [])

    

  return (
    <SafeAreaView style={FeedScreenStyle.container}>
      <View style={FeedScreenStyle.topContainer}>
        <View style={FeedScreenStyle.inputLayout}>
          <Inputfield parentCallback={handleCallback} />
        </View>
      </View>

      <View style={FeedScreenStyle.midContainer}>
        {props.pictures_arr != "undefined" &&  props.pictures_arr!= null && props.pictures_arr.length != null && props.pictures_arr.length > 0  ? (
          <View style={{ flex: 1, backgroundColor: "red" }}>
            <FlatList
              style={styles.container}
              data={props.pictures_arr}
              keyExtractor={(item, index) => 'key'+index}
              renderItem={ViewRender}
              onEndReached={() => {
                load_more();
              }}
              onEndReachedThreshold={0}
            />
          </View>
        ) : (
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text> No data </Text>
          </View>
        )}
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
const mapStateToProps = (state) => {
  return {
    pictures_arr: state.feedReducer.availableFeed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
