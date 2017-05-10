import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
      super(props)
      this.state = { isOpen: false }
    }

    handleOpen = () => {
      this.setState({ isOpen: true })
    }

    handleClose = () => {
       this.setState({ isOpen: false })
    }

  render() {
    return (
      <ul className="navbar">
        <li id="nav-wayfarer"><a id="wayfarer" href="/"><strong>Wayfarer</strong></a></li>
        <li id="nav-logout"><a id="logout" onClick={this.props.logoutButtonClicked}> Log Out</a></li>
        <li><a id="login" onClick= {this.props.loginButtonClicked}> Log In</a></li>
        <li><a id="sf" href="/cities/1">San Francisco</a></li>
        <li><a id="cities" href="/cities" title="Cities"
          onMouseEnter = { this.handleOpen }
          onMouseLeave = { this.handleClose }
          open={ this.state.isOpen }>Cities </a> </li>

      </ul>
    );
  }
}

export default Navbar;


// Next steps:
// 1. can we have <a> Cities </a> link to Cities page? and also
// on hover, have it display all the cities?
// 2. can we have mouse cursor appear when hovered on log in and log out? 
