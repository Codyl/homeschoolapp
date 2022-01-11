import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { MENTAL } from "../categories/mental";

export default class MentalCoursesComponent extends Component {
  static navigationOptions = {
    title: "Mental courses",
  };
  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          onPress={() => navigate("Topic", { item: item })}
        />
      );
    };
    return (
      <View>
        <Text> Here are our topics within Mental category </Text>
        <FlatList
          data={MENTAL}
          renderItem={renderDirectoryItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}
