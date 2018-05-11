import React, { Component } from "react";
import FeedPhoto from "./presenter";

class Container extends Component {
  state = {
    seeingLikes: false
  };
  render() {
    return (
      <FeedPhoto
        {...this.props}
        {...this.state}
        openLikes={this._openLikes}
        closeLikes={this._closeLikes}
      />
    );
  }
  _openLikes = () => {
    console.log('_openLikes: seeingLikes: true로 getPhotoLikes 함수 실행 ')
    const { getPhotoLikes } = this.props;
    this.setState({
      seeingLikes: true
    });
    getPhotoLikes();
  };
  _closeLikes = () => {
    console.log('_closeLikes: seeingLikes: false로 창을 닫음 ')

    this.setState({
      seeingLikes: false
    });
  };
}

export default Container;
