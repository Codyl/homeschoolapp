import React, { Component } from "react";
import { Text, ScrollView, View, Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";

import HomeComponent from "./HomeComponent";
import Courses from "./CoursesComponent";
import defaultNavigationOptions from "./NavigationOptions";
const HomeNavigator = createStackNavigator(
  {
    Home: { screen: HomeComponent },
  },
  defaultNavigationOptions
);
const CoursesNavigator = createStackNavigator(
  {
    Home: { screen: Courses },
  },
  defaultNavigationOptions
);
const UpcomingQuestsNavigator = createStackNavigator(
  {
    Home: { screen: HomeComponent },
  },
  defaultNavigationOptions
);
const AchievementsNavigator = createStackNavigator(
  {
    Home: { screen: HomeComponent },
  },
  defaultNavigationOptions
);
const AboutNavigator = createStackNavigator(
  {
    Home: { screen: HomeComponent },
  },
  defaultNavigationOptions
);

const SideNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Courses: { screen: Courses },
    UpcomingQuests: { screen: UpcomingQuestsNavigator },
    Achievements: { screen: AchievementsNavigator },
    About: { screen: AboutNavigator },
  },
  {
    drawerBackgroundColor: "#CEC8FF",
  }
);

const AppNavigator = createAppContainer(SideNavigator);

export default class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}>
        <AppNavigator />
      </View>
    );
  }
}
