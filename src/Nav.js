import React, { Component } from 'react';
import {Link} from 'react-router'

class Nav extends Component {
  render() {
    return (
      <header>
        <h1> <Link to={'/cities'}> nav bar placeholder </Link> </h1>
      </header>
    );
  }
}

export default Nav;
