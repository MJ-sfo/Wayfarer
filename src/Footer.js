import React, { Component } from 'react'
import {Grid} from 'react-bootstrap'

class Footer extends Component {

    constructor(props) {
        super(props)
console.log("footer-from ", props)
      }

  render() {
    return (
      <Grid>
        <hr />
        <footer id="footer">
          <p>© Wayfarer by J-SKM 2017</p>
          <p>obj printing in footer{this.props.footerUser}</p>
        </footer>
      </Grid>
    );
  }
}

export default Footer;
