import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { firebase, auth } from './utils/firebase';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }


  // communicates with firebase, before stuff mounts on page
  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        this.setState({ currentUser });
        console.log(this.state);
      } else {
        console.log('Logged out');
        this.setState({ currentUser: null });
      }
      // localStorage.
      // constant user = firebase.auth().currentUser;
      console.log("this user is: ");
      // constant person =
      console.log(currentUser);
    });  //  auth.onAuthStateChanged
  }

  loginButtonClicked(e) {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("signing in")
    // firebase popup, also updates state
    auth.signInWithPopup(provider);
  }

  logoutButtonClicked(e) {
    e.preventDefault();
    auth.signOut(); // also updates state
  }

  render() {
    return (
      <div>
        <Navbar
          currentUser={ this.state.currentUser }
          loginButtonClicked={ this.loginButtonClicked }
          logoutButtonClicked={ this.logoutButtonClicked }/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
