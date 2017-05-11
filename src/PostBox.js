import React, { Component } from 'react'
import $ from 'jquery-ajax'
import {Grid, Row, Col} from 'react-bootstrap'
import PostList from './PostList'
import PostForm from './PostForm'

class PostBox extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [] };
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
  }

  loadPostsFromServer() {
    $.ajax ({
      method: 'GET',
      url: this.props.url
    })
    .then(res => {
      this.setState({data: res.comments})
    })
  }

  componentDidMount() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval)
  }

  handlePostSubmit(post) {
    let posts = this.state.data;
    console.log('submit success!');
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3001/api/comments',
      data: post
    })
    .then((res) => {
      let newPosts = posts.concat(res)
      this.setState({ data: newPosts });
      console.log('submit success!')
    }, (err) => {
      console.error('post error', err);
    });
  }

  handlePostDelete(id) {
    $.ajax({
      method: 'delete',
      url: `${this.props.url}/${id}`
    })
    .then( (res) => {
      console.log('post deleted!')
    }, (err) => {
      console.log('delete error', err)
    });
  }

  handlePostUpdate(id, post) {
    $.ajax({
      method: 'put',
      url: `${this.props.url}/${id}`,
      data: post
    })
    .then( (res) => {
      console.log('post update success', res)
    }, (err) => {
      console.log('post update error', err)
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="post-box">
            <Col sm={12} md={8} mdOffset={2}><br/>
              <PostForm onPostSubmit={this.handlePostSubmit}/>
              <PostList
                data={this.state.data}
                onPostDelete={this.handlePostDelete}
                onPostUpdate={this.handlePostUpdate}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PostBox;
