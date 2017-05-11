import React, { Component } from 'react';
import PostBox from './PostBox'

// this is when Route path='/cities/1' (index.js)
// for Sprint 1, this only shows San Francisco
class City extends Component {
  render() {
    return (
      <div>
        <h1>this.state.City or this.props.City</h1>
        
      <PostBox
        url='http://localhost:3001/api/comments'
        pollInterval={1000}/>
      </div>
    );
  }
}

export default City;
