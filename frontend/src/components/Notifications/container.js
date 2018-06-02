import React, { Component } from "react";
import Notifications from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  render() {
    // const { userList } = this.props;
    return <Notifications {...this.props} {...this.state} />;
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.userList) {
      this.setState({
        loading: false
      });
    }
  };
}

export default Container;