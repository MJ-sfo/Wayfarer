import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import { Route, RouteHandler, Link } from 'react-router';
import mainImage from '../public/images/travel.jpg'

class Home extends Component {
  render() {
    return (
      <div>

        <div className="hover">
            <img className="image" src={mainImage} alt={"mainImage"} height="400" width="800"/>
            <span className="text">We are a global community of travelers, sharing pro tips!</span>
        </div>
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
