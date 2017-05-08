import React, { Component } from 'react';
import PostIndiv from './PostIndiv';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class PostContainer extends Component {
  render() {
    return (
      <div>
        <PostIndiv />
      </div>
    )
  }
}

export default PostContainer;
