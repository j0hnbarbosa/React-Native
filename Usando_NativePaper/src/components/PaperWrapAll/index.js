import React, { Component } from "react";
import { findCurrentCoordinates } from './geolocation';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  state = {
    location: null
  };

  findItNow = () => {
    console.log("findCurrentCoordinates:", findCurrentCoordinates());
    // console.log("findIt: ", findCoordinates());
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.findItNow}>
          <Text style={styles.welcome}>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  }
});