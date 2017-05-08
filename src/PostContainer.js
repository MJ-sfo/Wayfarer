import React, { Component } from 'react';
import PostIndiv from './PostIndiv';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class PostContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="post-container">
            <Col sm={12} md={10} mdOffset={1}><br/>
              <button> Add New Post</button>
              <PostIndiv />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PostContainer;
