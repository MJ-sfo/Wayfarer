import React, { Component } from 'react'
import PostBox from './PostBox'
import $ from 'jquery-ajax'

// this is when Route path='/cities/1' (index.js)
// for Sprint 1, this only shows San Francisco
class City extends Component {
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
      url: 'http://localhost:3001/api/cities/' + this.props.params.id// + api/cities req.params.id
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
    return (
      <div>
        <h2>{this.state.data.name}</h2>
        <img className="city" src={this.state.data.image} alt="sf-city"/>

      <PostBox
        url={`http://localhost:3001/api/cities/${this.props.params.id}`}
        pollInterval={2000}/>
      </div>
    );
  }
}

export default City;


//component will mount in/near ajax call for city
