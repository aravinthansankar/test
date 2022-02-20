import React from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import { Icon, Input, Text } from "@ui-kitten/components";
import * as feedActions from '../../redux/actions/feedActions'
import { useSelector, useDispatch } from 'react-redux';

export const Inputfield = () => {
  const [value, setValue] = React.useState("");
  const zoomIconRef = React.useRef();

  const dispatch = useDispatch();

  const search =() => {
    zoomIconRef.current.startAnimation()
    dispatch(feedActions.fetchFeed(value));
  }

  const renderIcon = (props) => (
    <TouchableWithoutFeedback
      onPress={search}
    >
      <Icon
        {...props}
        name="search-outline"
        ref={zoomIconRef}
        animation="zoom"
      />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      value={value}
      placeholder="Search"
      accessoryRight={renderIcon}
      onChangeText={(nextValue) => setValue(nextValue)}
    />
  );
};

export default Inputfield;

// onChangeText={(text) => {
//   feedActions.fetchFeed(text);
// }}