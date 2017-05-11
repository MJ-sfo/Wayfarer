import React, { Component } from 'react';
import PostBox from './PostBox'

// this is when Route path='/cities/1' (index.js)
// for Sprint 1, this only shows San Francisco
class City extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [] };
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
  }

  loadPostsFromServer() {
    $.ajax ({
      method: 'GET',
      url: this.props.url // + api/cities req.params.id
    })
    .then(res => {
      this.setState({data: res})
      console.log("got this city's post")
    })
  }

  componentDidMount() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval)
  }

  render() {
    return (
      <div>
        <h1>this.state.City.name or this.props.City.name</h1>

      <PostBox
        url='http://localhost:3001/api/comments' //maybe req.params.id
        pollInterval={1000}/>
      </div>
    );
  }
}

export default City;
