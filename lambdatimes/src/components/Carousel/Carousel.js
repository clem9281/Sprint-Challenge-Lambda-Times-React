import React, { Component } from "react";
import { carouselData } from "../../data";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,
      goLeft: false
    };
  }
  componentDidMount() {
    this.setState({
      images: carouselData
    });
  }

  leftClick = () => {
    this.setState(prevState => ({
      goLeft: true,
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
        style={{}}
        alt="random stuff"
        key={this.state.images[this.state.currentIndex]}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.selectedImage()}
        </ReactCSSTransitionGroup>

        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
