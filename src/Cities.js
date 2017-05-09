import React, { Component } from 'react';
import Citylist from './Citylist';
import citiesImage from '../public/images/suitcase.jpg';

// this is when Route path='/cities' (index.js)
class Cities extends Component {
  render() {
    return (
      <div className="cities-hover">
        <img src={citiesImage} alt={"citiesImage"} height="400" width="800"/>
        <span className="cities-text">Find a City</span>
        <Citylist />
      </div>
    );
  }
}

export default Cities;
