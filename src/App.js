import React, { Component } from "react";
import PhotoCard from "./components/Photo";
// import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import photos from "./photos.json";
import "./App.css";

class App extends Component {
  state = {
    photos,
    score: 0,
    topscore: 0,
    previousIDsClicked: [],
    message: "Click an image to begin"
  };

  shuffleArray = data => {
    let newArray = data.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    return newArray;
  };

  handleClick = id => {
    // console.log(id);
    //if previous IDS clicked contains ID
    if (this.state.previousIDsClicked.includes(id)) {
      this.setState({ score: 0 });
      this.setState({ previousIDsClicked: [] });

      // alert user game over
      this.setState({ message: "You guessed incorrectly!" })
    }
    // else add to array of previous IDs clicked
    else {
      this.setState({
        previousIDsClicked: [...this.state.previousIDsClicked, id],
        message: "You guessed correctly!"
      });

      // increase score
      this.setState({ score: this.state.score + 1 });

      if (this.state.score === this.state.topscore) {
        this.setState({ topscore: this.state.topscore + 1})
        
      }
      // increase topscore

      // shuffle images
      this.shuffleArray(photos);
    }

  };

  render() {
    return (
      <div className="container col-12 m-0 p-0">

          <Navbar message={this.state.message} score={this.state.score} topscore={this.state.topscore} />
          <div className="spacer"></div>
          <div className="jumbotron p-5 m-0">
            <h1 className="display-4 text-center">Clicky Game!</h1>
            <h5 className="text-center">Click on an image to earn points, but don't click on any more than once!</h5>
          </div>
          {/* {console.log(this.state)} */}
        <div className="row bigwrap pt-4">
          <div className="col-11 mx-auto">
            <div className="wrapper mx-auto">
              {this.state.photos.map(photo => (
                <PhotoCard
                  onClick={this.handleClick}
                  clickPhoto={this.clicked}
                  id={photo.id}
                  key={photo.id}
                  image={photo.image}
                  timesClicked={this.state.timesClicked}
                />
              ))}
            </div>
          </div>
            <div className="footer col-12 mt-4 pl-5 p-4">Clicky Game React</div>
        </div>
      </div>
    );
  }
}

export default App;
