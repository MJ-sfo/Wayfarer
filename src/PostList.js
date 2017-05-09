import React, { Component } from 'react';
import PostIndiv from './PostIndiv'

class PostList extends Component {
  render() {
    let postNodes = this.props.data.map( post => {
     return (
       <PostIndiv
          key={post._id}
          name={ post.name }
          text={post.text}
          uniqueID={post._id}
          onPostDelete={ this.props.onPostDelete }
          onPostUpdate={ this.props.onPostUpdate } />
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


// after post, warning: line 9 --- Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `PostList`.
