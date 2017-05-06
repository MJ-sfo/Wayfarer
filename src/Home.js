import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import { Route, RouteHandler, Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>

        <img src="https://blogs-images.forbes.com/robertadams/files/2016/03/the-best-travel-websites-in-the-world-1200x800.jpg?width=960"/>

        <div> We are a global community of travelers, sharing pro tips! </div>

        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={4}><br/>Find your favorite cities</Col>
            <Col sm={12} md={4}><br/>Read Reviews</Col>
            <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
            <Col sm={12} md={4}><br/>Share your favs!</Col>
          </Row>
        </Grid>

        <h3> <Link to={'/cities'}>Explore</Link> </h3>

      </div>
    );
  }
}

export default Home;
