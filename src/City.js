import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class City extends Component {
  render() {
    return (
      <div>
        <h1>San Francisco</h1>
        <img src="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1429821784/CHARMING0415-san-francisco.jpg?itok=vmayDoQQ"/>

        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={3} mdOffset={1}><br/>User Pic</Col>
            <Col sm={12} md={7}><br/>Title of blog post or trunc. summary</Col>
            <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
          </Row>
          <Row className="show-grid">
            <Col sm={12} md={3} mdOffset={1}><br/>User Pic</Col>
            <Col sm={12} md={7}><br/>Title of blog post or trunc. summary</Col>
            <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default City;

// stuff in <Row></Row> will probably eventually turn into their own Post components.. i think (-jane)
