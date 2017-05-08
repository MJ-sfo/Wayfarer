import React, { Component } from 'react';
import PostIndiv from './PostIndiv';
import $ from 'jquery-ajax';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import './index.css'
import PostList from './PostList'
import PostForm from './PostForm'

class PostBox extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  // load all comments for that city
  loadPostsFromServer() {
    $.ajax ({
      method: 'GET',
      url: this.props.url
    })
    .then(res => {
      this.setState({data: res.data.posts}) // res.data.comments or res.data?
    })
  }

  handlePostSubmit(e) {
    e.preventDefault();
    console.log('submit clicked')
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="post-box">
            <Col sm={12} md={10} mdOffset={1}><br/>
              <PostList />
              <PostForm onPostSubmit = {this.handlePostSubmit}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PostBox;
