import React, { Component } from 'react'

class Citylist extends Component {
  render() {
    return (
      <div>
        List of cities (will prob need smaller component)
        <a href="/cities/London"><div> London </div></a>
        <a href="/cities/5914ead3095c58f1d8d88c5e"><div> San Francisco </div></a>
        <a href="/cities/5914ead3095c58f1d8d88c60"><div> Gibraltar </div></a>
      </div>
    );
  }
}

export default Citylist;
