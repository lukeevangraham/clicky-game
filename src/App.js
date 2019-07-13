import React, { Component } from "react";
import PhotoCard from "./components/Photo";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import photos from "./photos.json";
import "./App.css";

class App extends Component {
  state = {
    photos
  };

  incrementClick = id => {
    console.log(this.timesClicked)
    this.timesClicked++
    console.log(this.timesClicked)
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
        {this.state.photos.map(photo => (
          <PhotoCard
          incrementClick={this.incrementClick}
            clickPhoto={this.clicked}
            id={photo.id}
            key={photo.id}
            image={photo.image}
            timesClicked={this.timesClicked}
          />
        ))}
        {/* </div> */}
      </Wrapper>
    );
  }
}

export default App;
