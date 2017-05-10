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
      <div className="header">
        <ul>
          <li><a href="/">Wayfarer</a></li>
          <li><a href="/cities" title="Cities"
            onMouseEnter = { this.handleOpen }
            onMouseLeave = { this.handleClose }
            open={ this.state.isOpen }>Cities </a> </li>
          <li><a href="/cities/1">San Francisco</a></li>
          <li><a onClick= {this.props.loginButtonClicked}> Log In</a></li>
          <li><a onClick={this.props.logoutButtonClicked}> Log Out</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

// nav /cities link currently don't direct to diff URL.
// could look into <Link to={'/cities'}>Cities</Link> some more (from Todo app)
