import React, { Component } from "react";
//import PropTypes from "prop-types";
import PhotoActions from "./presenter";

class Container extends Component {
  render() {
    console.log('Like, Unlike 최종 처리 된 값을 PhotoActions에 전송');
    return <PhotoActions {...this.props} />;
  }
}

export default Container;
