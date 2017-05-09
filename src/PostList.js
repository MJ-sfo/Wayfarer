import React, { Component } from 'react';
import PostIndiv from './PostIndiv'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class PostList extends Component {
  render() {
    let postNodes = this.props.data.map( post => {
     return (
       <PostIndiv
          text={post.text}
          name={ post.name }
          uniqueID = {post._id}
          key={ post._id }
          onCommentDelete={ this.props.onCommentDelete }
          onCommentUpdate={ this.props.onCommentUpdate } />
        )
      })
      return (
        <div className="post-list">
          {postNodes}
        </div>
      )
  }
}

export default PostList;


// let postNodes = this.props.data.map( post => {
//   return (
//     <PostIndiv
//       name= {post.name}
//       uniqueID = {post['_id']}
//       key = {post._id}
//       text = { post.text } />
//   )
// })
// return (
//   <div>
//     {postNodes}
//   </div>
// )
