import React, { Component } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import PhysicalCoursesComponent from "./PhysicalCoursesComponent";
import MentalCoursesComponent from "./MentalCoursesComponent";
import SocialCoursesComponent from "./SocialCoursesComponent";
import SpiritualCoursesComponent from "./SpiritualCoursesComponent";
import TopicComponent from "./TopicComponent";
import defaultNavigationOptions from "./NavigationOptions";

class CoursesComponent extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
const PhysicalNavigator = createStackNavigator(
  {
    Home: { screen: PhysicalCoursesComponent },
  },
  defaultNavigationOptions
);
const MentalNavigator = createStackNavigator(
  {
    Home: { screen: MentalCoursesComponent },
  },
  defaultNavigationOptions
);
const SocialNavigator = createStackNavigator(
  {
    Home: { screen: SocialCoursesComponent },
  },
  defaultNavigationOptions
);
const SpiritualNavigator = createStackNavigator(
  {
    Home: { screen: SpiritualCoursesComponent },
    Topic: { screen: TopicComponent },
  },
  defaultNavigationOptions
);
const Courses = createBottomTabNavigator(
  {
    Physical: { screen: PhysicalNavigator },
    Mental: { screen: MentalNavigator },
    Social: { screen: SocialNavigator },
    Spiritual: { screen: SpiritualNavigator },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#5637DD",
      inactiveBackgroundColor: "#CEC8FF",
      activeTintColor: "#fff",
      inactiveTintColor: "#808080",
      labelStyle: { fontSize: 16 },
    },
  }
);
export default Courses;
