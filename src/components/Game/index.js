import React, { Component } from "react";
import photos from "../../../src/photos.json"

class Game extends Component {
  state = {
    id: "",
    image: "",
    timesClicked: 0
  };

  render() {
    return (
      <div className="container">
        <div>Hello</div>

{this.state.photos.map(photo => (

))}





      </div>
    );
  }
}

export default Game;
