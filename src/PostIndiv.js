import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import ReactConfirmAlert from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
// import marked from 'marked' - do we need this? (MERN crud lab used this rawMarkup)

class PostIndiv extends Component {
  constructor(props) {
    super(props);
    this.state={
      // name: '', we are no longer allowing users to change name
      text: '',
      title: '',
      toBeUpdated: false,
      showDialog: false // for delete modal
    }
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
  };

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  updatePost(e) {
    e.preventDefault();
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  }

  handlePostUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    let title = (this.state.title) ? this.state.title : null;
    let text = (this.state.text) ? this.state.text : null;
    let date = Date.now(); // edit this into seconds, mins, hours, etc
    let post = { title:title, text: text, date:date};
    this.props.onPostUpdate(id, post);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      title: '',
      text: '',
      date:''
    })
  }

  deletePost(e) {
    e.preventDefault();
    this.setState({ showDialog: !this.state.showDialog})
  }

  handleDeletePost() {
    let id = this.props.uniqueID;
    this.props.onPostDelete(id);
    this.setState({ showDialog: !this.state.showDialog})
    console.log('post was deleted through modal');
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
    return (
      <div>
        <Row className="show-grid post">
          <Col className="userimage" sm={12} md={2}>
            <img id="userimage" src="http://rosupport.com/demo2/assets/images/gotm.jpg" alt="placeholder"/>
          </Col>
          <Col className="userinfo" sm={12} md={6}>
            <h5>Title: {this.props.title}</h5>
            <span id="username">{this.props.name}</span> says:
            <br/><div className="userpost"> {this.props.text} </div>
            <br/> <br/>
            <a className="edit-delete" onClick={ this.updatePost }> Edit </a> <span id="or">or</span>
            <a className="edit-delete" onClick={ this.deletePost }> Delete </a>
          </Col>
          <Col className="userinfo" sm={12} md={2}>
            <div className="dateposted">Posted: {this.timePassed(this.props.date)} ago</div>
          </Col>
        </Row>

          <Row className="show-grid-buttons">
            <Col sm={12} md={3} mdOffset={2}>
              { (this.state.toBeUpdated)
                ? (<form onSubmit={ this.handlePostUpdate }>
                    <input
                      type='text'
                      placeholder='Update Title...'
                      value={ this.state.title }
                      onChange={ this.handleTitleChange } /> <span>
                    <input
                      type='text'
                      placeholder='Update your comment...'
                      value={ this.state.text }
                      onChange={ this.handleTextChange } /> </span> <span>
                    <input
                      type='submit'
                      value='Update' /> </span>
                  </form>)
                : null}
            </Col>
          </Row>

        <hr/>
        <div> {
          (this.state.showDialog) &&
          <ReactConfirmAlert
            title="Confirm Delete"
            message="Are you sure you want to delete this?"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            onConfirm={this.handleDeletePost}
            onCancel={() => this.setState({ showDialog: !this.state.showDialog})}
          /> }
        </div>
      </div>
    )
  }
}

export default PostIndiv;

// on delete -> cancel & submit, error: index.js:44 Uncaught TypeError: Cannot read property 'parentNode' of null
// how to incorporate ${this.props.name} in the delete confirmation modal message?
