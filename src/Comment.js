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
    var id =  this.props.params.id
    $.ajax ({
      method: 'GET',
      url: `http://localhost:3001/api/comments/${id}`// + api/cities req.params.id
    })
    .then(res => {
      this.setState({data: res});
      console.log('data is ', this.state.data)
    })
  }
  componentDidMount() {
    this.loadCommentFromServer();
  }

  timePassed(post_time) {  // this function shows how long ago a post was made
    let now = new Date().getTime() ; //  time right now
    // post_time = Date.parse(post_time);  // converts text of date to number
    let difference = Math.floor((now - post_time) /1000) ;
    if ( Math.floor((difference) /(60*60*24*30) ) === 1 ) {
      return Math.floor((difference) /(60*60*24*30) ) + " month";
    }
    else if ( Math.floor((difference) /(60*60*24*30) ) > 0 ) {
      return Math.floor((difference) /(60*60*24*30) ) + " months";
    }
    else if ( Math.floor((difference) /(60*60*24*7) ) === 1 ) {
      return Math.floor((difference) /(60*60*24*7) ) + " week";
    }
    else if ( Math.floor((difference) /(60*60*24*7) ) > 0 ) {
      return Math.floor((difference) /(60*60*24*7) ) + " weeks";
    }
    else if ( Math.floor((difference) /(60*60*24) ) === 1 ) {
      return Math.floor((difference) /(60*60*24) ) + " day";
    }
    else if ( Math.floor((difference) /(60*60*24) ) > 0 ) {
      return Math.floor((difference) /(60*60*24) ) + " days";
    }
    else if ( Math.floor((difference) /(60*60) ) === 1 ) {
      return Math.floor((difference) /(60*60)  ) + " hour";
    }
    else if ( Math.floor((difference) /(60*60) ) > 0 ) {
      return Math.floor((difference) /(60*60)  ) + " hours";
    }
    else if ( Math.floor((difference) /60 ) === 1 ) {
      return Math.floor((difference) /60 ) + " minute";
    }
    else if ( Math.floor((difference) /60 ) > 0 ) {
      return Math.floor((difference) /60 ) + " minutes";
    }
    else if ( Math.floor((difference)) === 1 ) {
      return Math.floor((difference) /60 ) + " second";
    }
    else {
      return difference + " seconds";
    }
  }

  render() {
    console.log('Kevin', this.state.data, this.state.data.text)
    console.log('Brianna', this.props.params)
    return (
      <div className="comment">
        <Row className="one-comment">
          <Col sm={12} md={10} mdOffset={1}>
            <h1>{this.state.data.name} says: </h1>
            <h2>{this.state.data.text}</h2>
            <h3>posted: {this.timePassed(this.state.data.date)} ago </h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Comment;
