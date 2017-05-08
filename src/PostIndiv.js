import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import marked from 'marked'

class PostIndiv extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     text: ''
  //   }
  // };

  // this.handleNameChange = this.handleNameChange.bind(this);
  // this.handleTextChange = this.handleTextChange.bind(this);

  // handleTextChange(e) {
  //   this.setState({ text: e.target.value });
  // }
  //
  // handleNameChange(e) {
  //   this.setState({ name: e.target.value });
  // }

  // rawMarkup

  render() {
    return (
      <div className="post-indiv">
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={2}><br/>User Pic, {this.props.name}</Col>
            <Col sm={12} md={6}><br/>{this.props.text}</Col>
          </Row>
          <Row className="show-grid-buttons">
            <Col sm={12} md={3} mdOffset={7}>
              <button className="edit-delete"> Edit Post </button>
              <button className="edit-delete"> Delete </button>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PostIndiv;
