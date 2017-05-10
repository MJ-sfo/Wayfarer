import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link } from 'react-router';
import mainImage from '../public/images/base.jpg'

class Home extends Component {
  render() {
    return (
      <div>
        <img className="main-image" src={mainImage} alt={"mainImage"}/>
        <h1 className="header"> Wayfarer </h1>
        <h3 className="explore"> <Link to={'/cities/1'}>Explore</Link> </h3>
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={4}><br/>Find your favorite cities</Col>
            <Col sm={12} md={4}><br/>Read Reviews</Col>
            <Col sm={12} md={4}><br/>Share your favs!</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
