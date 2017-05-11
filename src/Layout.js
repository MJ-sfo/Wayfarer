import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { firebase, auth } from './utils/firebase';
import Profile from './Profile.js'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      uid: '',
      displayName: '',
      photoURL: ''
    }
  }

  // communicates with firebase, before stuff mounts on page
  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      // to move currentUser to child container
      // currentUser.preventDefault();
      // this.props.addTodoItem(this.state.todoInput);
      // addTodo: currentUser.displayName;
        // currentUser.displayName

      // this.setState({todoInput: ""});

      if (currentUser) {
        console.log('Logged in:', currentUser);
        console.log('uid is', currentUser.uid, 'name is', currentUser.displayName)
        this.setState({ currentUser });
      } else {
        console.log('Logged out');
        this.setState({ currentUser: null });
      }
      // to get permanet object of user data
      // this.setPStorage(this.localStorage);
      // this.setPId('ticker');
      // this.restorePState();
      // this.setPState({
      // userInfo: this.state});
      // console.log("and user stored data is: ", this.setPState({
      // userInfo: this.state}));
    });   //  auth.onAuthStateChanged
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
    // var user = this.state.currentUser;
    // console.log("rendering this.addTodo.bind(this)", this.addTodo.bind(this));
    // <Profile addToDo={this.addTodo.bind(this)} />
    // var kids = React.Children.map(this.props.children, function (child) {
    //   return React.cloneElement(child, {
    //     user: this.state.currentUser
    //   })
    // })
      //
    // console.log("sending user data via render/children/clone/children ", kids);
    // console.log("sending user data via render/children/clone/user ", user);

    // return user;
    // console.log('trying to send state to children', user);
    return (
      <div>

        <Navbar
          currentUser={ this.state.currentUser }
          loginButtonClicked={ this.loginButtonClicked }
          logoutButtonClicked={ this.logoutButtonClicked }/>
        {this.props.children}
        <Footer />
      </div>
    );  // return (
  }
}

// next i am trying https://jaketrent.com/post/send-props-to-children-react/

// <label>
//   <input type="object" value={props.value} name={props.name} />
//   {props.label}
// </label>

function renderChildren(props) {
  return React.Children.map(props.children, child => {
    if (child.type === Layout)
      return React.cloneElement(child, {
        name: props.name
      })
    else
      return child
  })
}

function RadioGroup(props) {
  return (
    <div class="radio-group">
      {renderChildren(props)}
    </div>
  )
}

function WhereImUsingRadioGroups() {
  return (
    <RadioGroup name="blizzard-games">
      <Layout label="Warcraft 2" value="wc2" />
      <Layout label="Warcraft 3" value="wc3" />
      <Layout label="Starcraft 1" value="sc1" />
      <Layout label="Starcraft 2" value="sc2" />
    </RadioGroup>
  )
}
export default Layout;
