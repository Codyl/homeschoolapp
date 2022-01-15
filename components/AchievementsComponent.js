import React, { Component } from "react";
import { Text, View, StyleSheet, Modal, FlatList } from "react-native";
import { Avatar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import achievements from "../Achievements";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

class AchievementsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  render() {
    const AvatarItem = ({ uri, title }) => (
      <View>
        <Avatar
          rounded
          size={"large"}
          containerStyle={styles.avatar}
          source={{
            uri: uri,
          }}
        />
        <Text>{title}</Text>
        <Button
          title="Details"
          onPress={() => this.setState({ showModal: true })}
        />
      </View>
    );
    return (
      <View>
        <View style={styles.title}>
          <Text style={{ fontSize: 20, alignSelf: "center" }}>Earned</Text>
        </View>
        <View style={styles.avatarsContainer}>
          {achievements.map(({ uri, title }) => (
            <AvatarItem uri={uri} title={title} />
          ))}
          <FlatList
            data={achievements}
            renderItem={({ id, uri, title }) => (
              <AvatarItem uri={uri} title={title} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <Modal
          animationType={"slide"}
          transparent={false}
          onRequestClose={() => this.setState({ showModal: false })}
          visible={this.state.showModal}>
          <View style={styles.modalText}>
            <Text style={styles.modalTitle}>Badge</Text>
            <Text style={styles.modalText}>Date Earned:</Text>
            <Text style={styles.modalText}>Qualifications:</Text>
            <Text style={styles.modalText}>Description:</Text>
            <Button icon="arrow-right" color="#5637DD" title="Favorite" />
          </View>
        </Modal>
      </View>
    );
  }
}

const EarnedBadgesNavigator = createStackNavigator({
  Home: { screen: AchievementsComponent },
});
const FavoritedBadgesNavigator = createStackNavigator({
  Home: { screen: AchievementsComponent },
});
const AllBadgesNavigator = createStackNavigator({
  Home: { screen: AchievementsComponent },
});

const AchievementsNavigator = createBottomTabNavigator(
  {
    Earned: { screen: EarnedBadgesNavigator },
    Favorited: { screen: FavoritedBadgesNavigator },
    All: { screen: AllBadgesNavigator },
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
const styles = StyleSheet.create({
  avatarsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginVertical: 30,
  },
  avatar: {
    alignSelf: "center",
    marginTop: 10,
  },
  title: {
    alignSelf: "stretch",
    backgroundColor: "grey",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#5637DD",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});
export default AchievementsNavigator;
