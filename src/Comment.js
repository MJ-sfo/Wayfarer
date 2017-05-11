import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import $ from 'jquery'
// this is when Route path='/cities/comment/:id' (index.js)
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadCommentFromServer = this.loadCommentFromServer.bind(this);
  }
  loadCommentFromServer() {
    $.ajax ({
      method: 'GET',
      url: 'http://localhost:3001/api/comments/5914ead3095c58f1d8d88c5b' // + api/cities req.params.id
    })
    .then(res => {
      this.setState({data: res});
      console.log('data is ', this.state.data)
    })
  }
  componentDidMount() {
    this.loadCommentFromServer();
  }
  render() {
    console.log('Kevin', this.state.data, this.state.data.text)
    return (
      <div className="comment">
        <Row className="one-comment">
          <Col sm={12} md={10} mdOffset={1}>
            {this.state.data.text}
          </Col>
        </Row>
      </div>
    );
  }
}
export default Comment;
