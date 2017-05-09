import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
// import marked from 'marked' - do we need this? (MERN crud lab used this rawMarkup)

class PostIndiv extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      text: '',
      toBeUpdated: false,
      showDialog: false // for delete modal
    }
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
  };

  handleNameChange(e) {
    this.setState({ name: e.target.value });
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
    let name = (this.state.name) ? this.state.name : null;
    let text = (this.state.text) ? this.state.text : null;
    let post = { name: name, text: text};
    this.props.onPostUpdate(id, post);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      name: '',
      text: ''
    })
  }

  deletePost(e) {
    e.preventDefault();
    this.setState({ showDialog: !this.state.showDialog})
  }

  handleDeletePost() {
    let id = this.props.uniqueID;
    this.props.onPostDelete(id);
    console.log('post was deleted through modal');
  }

  // deletePost(e) {
  //   e.preventDefault();
  //   let id = this.props.uniqueID;
  //   this.props.onPostDelete(id);
  //   console.log('oops deleted');
  // }

  render() {
    return (
      <div className="post-indiv">
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={2}><br/>{this.props.name}</Col>
            <Col sm={12} md={6}><br/>{this.props.text}</Col>

          </Row>
          <Row className="show-grid-buttons">
            <Col sm={12} md={3} mdOffset={7}>
              <button className="edit-delete" onClick={ this.updatePost }> Edit Post </button>
              <button className="edit-delete" onClick={ this.deletePost }> Delete </button>
              { (this.state.toBeUpdated)
                ? (<form onSubmit={ this.handlePostUpdate }>
                    <input
                      type='text'
                      placeholder='Update name...'
                      value={ this.state.name }
                      onChange={ this.handleNameChange } />
                    <input
                      type='text'
                      placeholder='Update your comment...'
                      value={ this.state.text }
                      onChange={ this.handleTextChange } />
                    <input
                      type='submit'
                      value='Update' />
                  </form>)
                : null}
            </Col>
          </Row>
        </Grid>
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
