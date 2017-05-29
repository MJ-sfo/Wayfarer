import React, { Component } from 'react'
import $ from 'jquery-ajax'
import {Row, Col} from 'react-bootstrap'
import UserPostList from './UserPostList'
// import UserPostForm from './PostForm'

class UserPostBox extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [] };
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
    // this.handlePostSubmit = this.handlePostSubmit.bind(this);
    // this.handlePostDelete = this.handlePostDelete.bind(this);
    // this.handlePostUpdate = this.handlePostUpdate.bind(this);
  }

  loadPostsFromServer() {
    $.ajax ({
      method: 'GET',
      url: 'http://localhost:3001/api/profile/comments/Sejin%20P.' // ${currentUser.uid?}
    })
    .then(res => {
      this.setState({data: res})
    })
  }

  componentDidMount() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval)
  }

  render() {
    return (
      <div>
        <Row className="post-box">
          <UserPostList
            data={this.state.data}/>
        </Row>
      </div>
    )
  }
}

export default UserPostBox;

// <PostForm
//   onPostSubmit={this.handlePostSubmit}
//   cityName={this.props.cityName}/>
