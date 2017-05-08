import React, { Component } from 'react';
import PostIndiv from './PostIndiv';
import $ from 'jquery-ajax';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import './index.css';
import PostList from './PostList';
import PostForm from './PostForm';
import DATA from '../data'; // delete later (starter data)

class PostBox extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    // this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
    // this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  // load all comments for that city
  // loadPostsFromServer() {
  //   $.ajax ({
  //     method: 'GET',
  //     url: DATA
  //   })
  //   .then(res => {
  //     this.setState({data: res.data.posts}) // res.data.comments or res.data?
  //   })
  // }

  // componentDidMount() {
  //   this.loadPostsFromServer();
  //   setInterval(this.loadPostsFromServer, this.props.pollInterval)
  // }
  //
  // handlePostSubmit(e) {
  //   e.preventDefault();
  //   console.log('submit clicked')
  // }

  render() {
    return (
      <div>
        <Grid>
          <Row className="post-box">
            <Col sm={12} md={10} mdOffset={1}><br/>
              <PostList data = {DATA}/>
              <PostForm/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PostBox;

// onPostSubmit = {this.handlePostSubmit}
