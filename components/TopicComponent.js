import React, { Component } from "react";
import { Button, FlatList, Text, View } from "react-native";

export default class TopicComponent extends Component {
  static navigationOptions = {
    title: "Topic",
  };
  render() {
    console.log("topic", this.props.navigation.state.params.item);
    const item = this.props.navigation.state.params.item;
    return (
      <View>
        <Text> {item.name} </Text>
        <Text> {item.book} </Text>
        <Text> {item.mentor} </Text>
        <Text> {item.project} </Text>
        <Button title="Add course" />
        {/* <FlatList
          data={item.outcomes}
          renderItem={(outcome) => {
            <Text>test</Text>;
          }}
          keyExtractor={(item) => item.toString()}
        /> */}
      </View>
    );
  }
}
