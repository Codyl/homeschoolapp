import React, { Component } from "react";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export default defaultNavigationOptions = {
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#5637DD",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      color: "#fff",
    },
    headerLeft: (
      <Icon
        name="bars"
        type="font-awesome"
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}
      />
    ),
  }),
};

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});
