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

// nav /cities link currently don't direct to diff URL.
// could look into <Link to={'/cities'}>Cities</Link> some more (from Todo app)
