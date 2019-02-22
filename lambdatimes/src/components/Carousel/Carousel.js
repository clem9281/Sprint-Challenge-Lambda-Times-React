import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0
    };
  }
  componentDidMount() {
    this.setState({
      images: carouselData
    });
  }

  leftClick = () => {
    this.setState(prevState => ({
      currentIndex:
        prevState.currentIndex === 0
          ? this.state.images.length - 1
          : prevState.currentIndex - 1
    }));
  };

  rightClick = () => {
    this.setState(prevState => ({
      currentIndex:
        prevState.currentIndex === this.state.images.length - 1
          ? 0
          : prevState.currentIndex + 1
    }));
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.images[this.state.currentIndex]}
        style={{ display: "block" }}
        alt="random stuff"
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
