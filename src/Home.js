import React, { Component } from 'react';
import Nav from './Nav'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Nav />
        <p> splash page image - use hide class on me when at /cities </p>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
