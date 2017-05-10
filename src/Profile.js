import React, { Component } from 'react';
import Layout from './Layout';
// var user = firebase.auth().currentUser;
//  <p> {this.props.currentUser.displayName}</p>

class Profile extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        the user info from firebase login is:
        <p>  </p>
      </div>
    );  // return
  }  //  render

}  // class Layout


export default Profile;
