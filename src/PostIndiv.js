import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import marked from 'marked'

class PostIndiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: '',
      toBeUpdated: false,
    }
    // this.deletePost = this.deletePost.bind(this);
    // this.updatePost = this.updatePost.bind(this);
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleTextChange = this.handleTextChange.bind(this);
    // this.handlePostUpdate = this.handlePostUpdate.bind(this);
  };

  updatePost(e) {
    e.preventDefault();
    //brings up the update field when we click on the update link.
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  }

  handleCommentUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    //if author or text changed, set it. if not, leave null and our PUT request
    //will ignore it.
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
    let id = this.props.uniqueID;
    this.props.onPostDelete(id);
    console.log('oops deleted');
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

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
                      onChange= { this.handleNameChange } />
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
      </div>
    )
  }
}

export default PostIndiv;
