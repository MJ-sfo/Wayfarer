import React, { Component } from 'react'

class Citylist extends Component {

  render() {
    console.log("KT", this.props.data, this.props.data.name)
    return (
      <div>
        <h1>{this.props.data.name}</h1>
        <h1>{this.props.data.image}</h1>
      </div>
    );
  }
}

export default Citylist;
