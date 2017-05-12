import React, { Component } from 'react'
import $ from 'jquery'
import citiesImage from '../public/images/suitcase.jpg'
import {Link} from 'react-router'

// this is when Route path='/cities' (index.js)
class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadCityFromServer = this.loadCityFromServer.bind(this);
  }
  loadCityFromServer() {
    $.ajax ({
      method: 'GET',
      url: 'http://localhost:3001/api/cities/'
    })
    .then(res => {
      this.setState({data: res});
      console.log('data is ', this.state.data)
    })
  }
  componentDidMount() {
    this.loadCityFromServer();
  }

  render() {
    return (
      <div>
        <div className="cities-hover">
          <img src={citiesImage} alt={"citiesImage"} height="100%" width="100%"/>
            <span className="cities-text" >
            <ul className="dropdown-content2">
              <li className="findCity"> Find a City </li>
              <li className="cityName"> <Link to={'/cities/San%20Francisco'}>San Francisco</Link></li>
              <li className="cityName"> <a href="/cities/London">London</a></li>
              <li className="cityName"> <a href="/cities/Gibraltar">Gibraltar</a></li>
            </ul>
          </span>
        </div>
      </div>
    )}
}

export default Cities;

//
// return (
//   <div>
//     <div className="cities-hover">
//       <img src={citiesImage} alt={"citiesImage"} height="100%" width="100%"/>
//         <span className="cities-text" >
//         <ul className="dropdown-content2">
//           <li className="findCity"> Find a City </li>
//           <li className="cityName"> <Link to={`/cities/${this.props.uniqueID}`}>San Francisco</Link></li>
//           <li className="cityName"> <a href="/cities/london">London</a></li>
//           <li className="cityName"> <a href="/cities/gibraltar">Gibraltar</a></li>
//         </ul>
//       </span>
//     </div>
//   </div>
// );
// }
