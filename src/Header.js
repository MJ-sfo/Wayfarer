import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

class Header extends Component {
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
      <div>
        <h1> Wayfarer </h1>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Wayfarer</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
            <NavDropdown eventKey={3} href="/cities" title="Cities"
              onMouseEnter = { this.handleOpen }
              onMouseLeave = { this.handleClose }
              open={ this.state.isOpen }
              Cities
              id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href="/cities/1">San Francisco</MenuItem>
                <MenuItem eventKey={3.2}>Could</MenuItem>
                <MenuItem eventKey={3.3}>We put</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Here</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">About Us?</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Log In/Out</NavItem>
              <NavItem eventKey={2} href="#">Sign Up</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

// nav /cities link currently don't direct to diff URL.
// could look into <Link to={'/cities'}>Cities</Link> some more (from Todo app)
