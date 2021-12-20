import React, { Component } from "react";
import { Text, ScrollView, View, Platform } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeComponent from "./HomeComponent";
import PhysicalCoursesComponent from "./PhysicalCoursesComponent";
import MentalCoursesComponent from "./MentalCoursesComponent";
import SocialCoursesComponent from "./SocialCoursesComponent";
import SpiritualCoursesComponent from "./SpiritualCoursesComponent";
import TopicComponent from "./TopicComponent";
import { createBottomTabNavigator } from "react-navigation-tabs";
const HomeNavigator = createStackNavigator(
  {
    Home: { screen: HomeComponent },
    Physical: { screen: PhysicalCoursesComponent },
    Social: { screen: SocialCoursesComponent },
    Mental: { screen: MentalCoursesComponent },
    Spiritual: { screen: SpiritualCoursesComponent },
    topic: { screen: TopicComponent },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
  },
  {
    drawerBackgroundColor: "#CEC8FF",
  }
);

const Tab = createBottomTabNavigator({
  Home: { screen: HomeComponent },
  Main: { screen: MainNavigator },
});

const AppNavigator = createAppContainer(Tab);

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
