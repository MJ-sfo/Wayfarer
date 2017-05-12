import React, { Component } from 'react'
import Citylist from './Citylist'
import citiesImage from '../public/images/suitcase.jpg'

// this is when Route path='/cities' (index.js)
class Cities extends Component {
  render() {
    return (
      <div className="cities-hover">
        <img src={citiesImage} alt={"citiesImage"} height="100%" width="100%"/>
        <span className="cities-text" >
          <ul className="dropdown-content2">
            <li className="findCity"> Find a City </li>
            <li className="cityName"> <a href="/cities/1">San Francisco</a></li>
            <li className="cityName"> <a href="/cities/london">London</a></li>
            <li className="cityName"> <a href="/cities/gibraltar">Gibraltar</a></li>
          </ul>
        </span>

        <Citylist />
      </div>
    );
  }
}

export default Cities;
