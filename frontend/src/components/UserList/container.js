import React, { Component } from "react";
import UserList from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  render() {
    const { userList } = this.props;
    return <UserList {...this.props} {...this.state} userList={userList} />;
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
