import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { SPIRITUAL } from "../categories/spiritual";

export default class SpiritualCoursesComponent extends Component {
  static navigationOptions = {
    title: "Spiritual courses",
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
        <Text> Here are our topics within spiritual category </Text>
        <FlatList
          data={SPIRITUAL}
          renderItem={renderDirectoryItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}
