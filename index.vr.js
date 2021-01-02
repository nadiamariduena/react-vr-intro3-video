import React from "react";
import { AppRegistry, asset, Pano, Text, View, Sound } from "react-vr";
// --------------
import MovieTheater from "./Components/Scenes/MovieTheater.js";
// --------------
//

export default class reactVRintro3_video extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("RedCliffs_Damaggio.jpg")} />
        <MovieTheater />
      </View>
    );
  }
}

AppRegistry.registerComponent("reactVRintro3_video", () => reactVRintro3_video);
