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

  render() {
    return (
      <Wrapper>
<Navbar>Test</Navbar>
{/* <div className="row"> */}
        {this.state.photos.map(photo => (
          <PhotoCard
            clickPhoto={this.clicked}
            id={photo.id}
            image={photo.image}
          />
        ))}
        {/* </div> */}
      </Wrapper>
    );
  }
}

export default App;
