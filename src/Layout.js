import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { firebase, auth } from './utils/firebase'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    }
  }

  // communicates with firebase, before stuff mounts on page
  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        this.setState({ currentUser });
      } else {
        console.log('Logged out');
        this.setState({ currentUser: null });
      }
    });
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
    // var that = this;
    // var childrenWithProps = React.Children.map(this.props.children, function(child){
    //   return React.cloneElement(child, {currentUser: that.state.currentUser}) {childrenWithProps}
    // })
    console.log('layout props', this.props.children)
    return (
      <div>
        <Navbar
          currentUser={ this.state.currentUser }
          loginButtonClicked={ this.loginButtonClicked }
          logoutButtonClicked={ this.logoutButtonClicked }/>
        {this.props.children && React.cloneElement(this.props.children, {currentUser: this.state.currentUser})}
        <Footer />
      </div>
    );
  }
}

export default Layout;

//{currentUser: this.state.currentUser}


//   {this.props.children}
// https://jaketrent.com/post/send-props-to-children-react/
// http://stackoverflow.com/questions/38403321/pass-this-state-with-this-props-children
//https://github.com/ReactTraining/react-router/issues/1531
