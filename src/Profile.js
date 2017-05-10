import React, { Component } from 'react';
import $ from 'jquery-ajax';
import {Grid, Row, Col} from 'react-bootstrap';
import PostForm from './PostForm'
import PostList from './PostList'
import UserPosts from './UserPosts'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [] };
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="profile-contents">
            <Col sm={12} md={8} mdOffset={2}><br/>
              <Row>
                <Col sm={12} md={4}>
                  <img src=""/>
                  <UserPosts />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Profile;
