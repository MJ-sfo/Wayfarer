import React, { Component } from 'react';
import $ from 'jquery-ajax';
import {Grid, Row, Col} from 'react-bootstrap';
import PostList from './PostList';
import PostForm from './PostForm';

class PostBox extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [] };
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  loadPostsFromServer() {
    $.ajax ({
      method: 'GET',
      url: this.props.url // defined in City component
    })
    .then(res => {
      this.setState({data: res}) // res.data.comments or res.data?
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
      url: this.props.url,
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

  render() {
    return (
      <div>
        <Grid>
          <Row className="post-box">
            <Col sm={12} md={10} mdOffset={1}><br/>
              <PostList data={this.state.data} />
              <PostForm onPostSubmit={this.handlePostSubmit}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PostBox;
