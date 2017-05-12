import React, { Component } from 'react'
import $ from 'jquery'
import Citylist from './Citylist'
import citiesImage from '../public/images/suitcase.jpg'

// this is when Route path='/cities' (index.js)
class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadCityFromServer = this.loadCityFromServer.bind(this);
  }
  loadCityFromServer() {
    $.ajax ({
      method: 'GET',
      url: 'http://localhost:3001/api/cities/'
    })
    .then(res => {
      this.setState({data: res});
      console.log('data is ', this.state.data)
    })
  }
  componentDidMount() {
    this.loadCityFromServer();
  }

  render() {
    console.log('Kevin hates ', this.state.data)
    return (
      <div className="cities-hover">
        <img src={citiesImage} alt={"citiesImage"} height="400" width="800"/>
        <span className="cities-text">Your FAV cities!</span>
          <Citylist
            data = {this.state.data} />
      </div>
    );
  }
}

export default Cities;
