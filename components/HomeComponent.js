import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { Link } from "@react-navigation/native";
import { Card, ListItem } from "react-native-elements";
import { Video, AVPlaybackStatus } from "expo-av";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vidStatus: {},
    };
    this.video = React.createRef(null);
  }

  static navigationOptions = {
    title: "Dragons Nest Homeschool",
  };

  showVideoInFullscreen = async () => {
    // PlaybackStatus https://docs.expo.io/versions/latest/sdk/av/
    const status = await this.video.presentFullscreenPlayer();
    const play = await this.video.playAsync();
  };

  render() {
    return (
      <ScrollView>
        <Text style={styles.center}>Welcome to</Text>
        <Text style={styles.h1}>Dragons Nest</Text>
        <Card title={"About our Homeschool program"}>
          <Text>
            We allow our students to choose one class/Adventure in each of four
            categories per month. Once added students can view their assignments
            in the upcoming quests tab. When they perform well they can gain
            achievements which can be viewed form the achievements tab.
          </Text>
          <Button
            title={"View introduction Video"}
            onPress={() => {
              this.showVideoInFullscreen();
            }}
            color={"blue"}
          />
        </Card>
        <View style={styles.container}>
          <Video
            ref={(ref) => (this.video = ref)}
            isLooping={false}
            onPlaybackStatusUpdate={(status) => console.log(status)}
            style={styles.video}
            source={{
              uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(newStatus) =>
              this.setState({ status: newStatus })
            }
          />
        </View>
        <Image
          style={styles.fullWidthImage}
          source={{
            uri: "https://media.time4learning.com/uploads/5-steps-homeschool-child-min.jpg",
          }}
        />
      </ScrollView>
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
  container: {},
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  center: {
    alignSelf: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fullWidthImage: {
    width: 300,
    height: 300,
    margin: 10,
  },
});
