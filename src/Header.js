import React, { Component } from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

class Header extends Component {
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
              <NavItem eventKey={1} href="/cities">Cities</NavItem>
              <NavItem eventKey={2} href="#">About Us?</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>What</MenuItem>
                <MenuItem eventKey={3.2}>Could</MenuItem>
                <MenuItem eventKey={3.3}>We put</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Here</MenuItem>
              </NavDropdown>
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
