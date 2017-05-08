import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import Citylist from './Citylist'

// this is when Route path='/cities' (index.js)
class Cities extends Component {
  render() {
    return (
      <div>
        <Citylist />
      </div>
    );
  }
}

export default Cities;
