import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link } from 'react-router';
import mainImage from '../public/images/base.jpg'
import locateImage from '../public/images/locate.svg'
import blogImage from '../public/images/blog.svg'
import reviewImage from '../public/images/review.svg'

class Home extends Component {
  render() {
    return (
      <div>
        <img className="main-image" src={mainImage} alt={"mainImage"}/>
        <h3 className="explore"> <Link to={'/cities/1'}>Explore</Link> </h3>
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={2} mdOffset={3}><br/><h3>Locate Fav City</h3>
              <img className="locateImage" src={locateImage} alt={"locateImage"} height="60" width="60"/>
              <p>Find your favorite city in our crowdsource.</p>
            </Col>
            <Col sm={12} md={2}><br/><h3>Spot the Reviews</h3>
              <img className="reviewImage" src={reviewImage} alt={"reviewImage"} height="60" width="60"/>
              <p>Remember a time during the last vacation that was memorable? Post it here!</p>
            </Col>
            <Col sm={12} md={2}><br/><h3>Share Your Favs!</h3>
              <img className="blogImage" src={blogImage} alt={"blogImage"} height="60" width="60"/>
              <p>Blog about your favorite places!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
