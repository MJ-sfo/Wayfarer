import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class PostIndiv extends Component {
  render() {
    return (
      <div className="post-indiv">
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={2}><br/>User Pic</Col>
            <Col sm={12} md={6}><br/>Todays tip for MUNI trunc. summary</Col>
          </Row>
          <Row className="show-grid-buttons">
            <Col sm={12} md={3} mdOffset={7}>
              <button className="edit-delete"> Edit Post </button>
              <button className="edit-delete"> Delete </button>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PostIndiv;
