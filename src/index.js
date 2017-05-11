import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route} from 'react-router'
import Home from './Home'
import Cities from './Cities'
import City from './City'
import Layout from './Layout'
import './index.css'
import Profile from './Profile'

ReactDOM.render(
  <Layout>
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/cities' component={Cities} />
      <Route path='/cities/1' component={City} />
      <Route path='/profile' component={Profile} />
    </Router>
  </Layout>,
  document.getElementById('root')
);


// react router route params
//props.params
// in route path='/cities/:id' component={city}
// in city ... {props.params.id}
