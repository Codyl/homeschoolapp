import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { PHYSICAL } from "../categories/physical";
export default class PhysicalCoursesComponent extends Component {
  static navigationOptions = {
    title: "Physical courses",
  };
  render() {
    const { navigate } = this.props.navigation;

    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          onPress={() => navigate("topic", { item: item })}
        />
      );
    };
    return (
      <View>
        <Text> Here are our topics within Physical category </Text>
        <FlatList
          data={PHYSICAL}
          renderItem={renderDirectoryItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}
