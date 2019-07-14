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
    previousIDsClicked: []
  };

  shuffleArray = (data) => {
    let newArray = data.sort(function(a, b)
    {return 0.5 - Math.random()})
    return newArray;
  }

  handleClick = id => {
    // console.log(id);
    //if previous IDS clicked contains ID
    if (this.state.previousIDsClicked.includes(id)) {
      this.setState({score : 0})
      this.setState({ previousIDsClicked : [] })

      // alert user game over
    }  
    // else add to array of previous IDs clicked
    else {
      this.setState({ previousIDsClicked : [...this.state.previousIDsClicked, id] })
      // console.log(this.state.previousIDsClicked)

      // increase score
      this.setState({ score : this.state.score + 1 })
      
      // shuffle images
      this.shuffleArray(photos)

    }



    // if score is greater than high score then score = high schore
    // else score goes to zero

    // this.setState({ timesClicked: this.state.timesClicked + 1 });
  };

  // reposition = id => {
  //   // Filter this.state.photos for photos with an id not equal to the id clicked
  //   const photos = this.state.photos.filter(photo => photo.id !== id);
  //   this.setState({ photos })
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar></Navbar>
          {/* <div className="row"> */}
          <h1>Score: {this.state.score}</h1>
          {console.log(this.state)}
        </div>
      <div className="wrapper">
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
      
    );
  }
}

export default App;
