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
        <FlatList
          data={item.outcomes}
          renderItem={({ outcome }) => <Text>{item.outcomes[0]}</Text>}
          keyExtractor={(item) => item.toString()}
        />
        <Button title="Add course" />
      </View>
    );
  }
}
