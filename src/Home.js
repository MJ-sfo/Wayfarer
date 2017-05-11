import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {Link } from 'react-router'
import mainImage from '../public/images/base.jpg'
import traveltop2 from '../public/images/traveltop2.jpg'
import wayfarer from '../public/images/wayfarer.png'
import locateImage from '../public/images/locate.svg'
import reviewImage from '../public/images/review.svg'
import blogImage from '../public/images/blog.svg'

class Home extends Component {
  render() {
    return (
      <div>
        <img className="main-image wow fadeInDown" data-wow-delay="0.2s" src={mainImage} alt={"mainImage"}/>
        <div className="parallax"> {/* main parallax wrapper*/}
            <div id="section-1" className="parallax-section"> {/* first section */}
                <div className="parallax-layer parallax-layer-base">{/*parallax content*/}
                    <div className="full-bg-img flex-center">{/* container to center content*/}
                      <img className="main-image" data-wow-delay="0.2s" id="wayfarer" alt="" src={wayfarer}/>
                    </div>
                </div>
                <div className="parallax-layer parallax-layer-back">

                </div>
            </div> {/* end first section */}

          <div className="section-2">

            <h3 className="explore"> <Link to={'/cities/'}>Explore</Link> </h3>
            <Grid>
              <Row className="show-grid">
                <Col sm={12} md={4}><br/><h3>Locate Fav City</h3>
                  <img className="locateImage" src={locateImage} alt={"locateImage"} height="120" width="120"/>
                  <p>Find your favorite city in our crowdsource.</p>
                </Col>
                <Col sm={12} md={4}><br/><h3>Spot the Reviews</h3>
                  <img className="reviewImage" src={reviewImage} alt={"reviewImage"} height="120" width="120"/>
                  <p>Remember a time during the last vacation that was memorable? Post it here!</p>
                </Col>
                <Col sm={12} md={4}><br/><h3>Share Your Favs!</h3>
                  <img className="blogImage" src={blogImage} alt={"blogImage"} height="120" width="120"/>
                  <p>Blog about your favorite places!</p>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
