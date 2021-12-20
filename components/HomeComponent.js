import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";
import { ListItem } from "react-native-elements";

export default class HomeComponent extends Component {
  static navigationOptions = {
    title: "Dragons Nest Homeschool",
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text style={styles.h1}>Homeschool</Text>
        <Text>Please add one course to each of the following categories.</Text>
        <Text>Please select a category</Text>
        <ListItem
          onPress={() => navigate("Physical")}
          title={"Physical courses"}
        />
        <ListItem
          onPress={() => navigate("Spiritual")}
          title={"Spiritual courses"}
        />
        <ListItem onPress={() => navigate("Mental")} title={"Mental courses"} />
        <ListItem onPress={() => navigate("Social")} title={"Social courses"} />
        <View>
          <Text>My Physical course:</Text>
          <Text>My Spiritual course:</Text>
          <Text>My Mental course:</Text>
          <Text>My Social course:</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
