import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { SOCIAL } from "../categories/social";

export default class SocialCoursesComponent extends Component {
  static navigationOptions = {
    title: "Social courses",
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
        <Text> Here are our topics within Social category </Text>
        <FlatList
          data={SOCIAL}
          renderItem={renderDirectoryItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}
