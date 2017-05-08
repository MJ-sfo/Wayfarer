import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class PostIndiv extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={3} mdOffset={1}><br/>User Pic</Col>
            <Col sm={12} md={7}><br/>Todays tip for MUNI trunc. summary</Col>
            <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PostIndiv;
