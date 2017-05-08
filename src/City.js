import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import PostContainer from './PostContainer'

class City extends Component {
  render() {
    return (
      <div>
        <h1>San Francisco</h1>
        <img className="city" src="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1429821784/CHARMING0415-san-francisco.jpg?itok=vmayDoQQ"/>

      <PostContainer />
      </div>
    );
  }
}

export default City;

// stuff in <Row></Row> will probably eventually turn into their own Post components.. i think (-jane)
