import React, { Component } from "react";
import PhotoCard from "./components/Photo";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import photos from "./photos.json";
import "./App.css";

class App extends Component {
  state = {
    photos,
    timesClicked: 0
  }


  incrementClick = id => {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
  }

  // reposition = id => {
  //   // Filter this.state.photos for photos with an id not equal to the id clicked
  //   const photos = this.state.photos.filter(photo => photo.id !== id);
  //   this.setState({ photos })
  // }

  render() {
    return (
      <Wrapper>
        <Navbar>Test</Navbar>
        {/* <div className="row"> */}
          <h1>Times clicked: { this.state.timesClicked }</h1>
          {console.log(this.state)}
        {this.state.photos.map(photo => (
          <PhotoCard
            onClick={this.incrementClick}
            clickPhoto={this.clicked}
            id={photo.id}
            key={photo.id}
            image={photo.image}
            timesClicked={this.state.timesClicked}
          />
        ))}
        {/* </div> */}
      </Wrapper>
    );
  }
}

export default App;
