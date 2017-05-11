import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {Link } from 'react-router'
import mainImage from '../public/images/base.jpg'
import traveltop2 from '../public/images/traveltop2.jpg'
import wayfarer from '../public/images/wayfarer.png'

class Home extends Component {
  render() {
    return (
      <div>
        <img className="main-image wow fadeInDown" data-wow-delay="0.2s" src={mainImage} alt={"mainImage"}/>
        <div className="parallax"> {/* main parallax wrapper*/}
            <div id="section-1" className="parallax-section"> {/* first section */}
                <div className="parallax-layer parallax-layer-base">{/*parallax content*/}
                    <div className="full-bg-img flex-center">{/* container to center content*/}
                      <img className="main-image" id="wayfarer" src={wayfarer}/>
                      <img id="top" src={traveltop2}/>
                    </div>
                </div>
                <div className="parallax-layer parallax-layer-back">

                </div>
            </div> {/* end first section */}

          <div className="section-2">

            <h3 className="explore"> <Link to={'/cities/1'}>Explore</Link> </h3>
            <Grid>
              <Row className="show-grid">
                <Col sm={12} md={4}><br/>Find your favorite cities</Col>
                <Col sm={12} md={4}><br/>Read Reviews</Col>
                <Col sm={12} md={4}><br/>Share your favs!</Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
