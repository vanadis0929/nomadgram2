import React, { Component } from "react";
import Navigation from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    term: "",
    seeingNotifications: false
  };
  static propTypes = {
    goToSearch: PropTypes.func.isRequired,
    getPhotoLikesNotification: PropTypes.func.isRequired

  };
  render() {
    const { term } = this.state;
    return (
      <Navigation
        onSubmit={this._onSubmit}
        onInputChange={this._onInputChange}
        value={term}
        {...this.props}
        {...this.state}
        openNotifications={this._openNotifications}
        closeNotifications={this._closeNotifications}        
      />
    );
  }
  _onInputChange = event => {
    const { target: { value } } = event;
    this.setState({
      term: value
    });
  };
  _onSubmit = event => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    event.preventDefault();
    goToSearch(term);
    this.setState({
      term: ""
    });
  };

 _openNotifications = () => {
   console.log('_openNotifications: seeingNotifications: true로 getPhotoLikesNotification 함수 실행 ')


   const {
     getPhotoLikesNotification
   } = this.props;

   this.setState({
     seeingNotifications: true
   });
   getPhotoLikesNotification();

 };
 _closeNotifications = () => {
     console.log('_closeNotifications: seeingNotifications: false로 창을 닫음 ')

     this.setState({
       seeingNotifications: false
     });
  }
}

export default Container;
