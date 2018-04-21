import React, { Component } from "react";
//import PropTypes from "prop-types";
import PhotoActions from "./presenter";

class Container extends Component {
  render() {
    return <PhotoActions {...this.props} />;
  }
}

export default Container;
