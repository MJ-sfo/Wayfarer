import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import {Link } from 'react-router';
import mainImage from '../public/images/travel.jpg'
import cityImage from '../public/images/city.png'
import blogImage from '../public/images/blog.png'
import reviewsImage from '../public/images/reviews.png'

class Home extends Component {
  render() {
    return (
      <div>

        <div className="hover">
          <Link to={'/cities'}>
            <img className="image" src={mainImage} alt={"mainImage"} height="400" width="800"/>
            <span className="text">We are a global community of travelers, sharing pro tips!</span>
          </Link>
        </div>
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={4}><br/><h3>Locate Fav City</h3>
              <img className="iconImage" src={cityImage} alt={"cityImage"} height="120" width="120"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            <Col sm={12} md={4}><br/><h3>Spot the Reviews</h3>
              <img className="iconImage" src={reviewsImage} alt={"reviewsImage"} height="120" width="120"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            <Col sm={12} md={4}><br/><h3>Share Your Favs!</h3>
              <img className="iconImage" src={blogImage} alt={"blogImage"} height="120" width="120"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>
        </Grid>

        <h3> <Link to={'/cities/1'}>Explore</Link> </h3>

      </div>
    );
  }
}

export default Home;
