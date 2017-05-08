import React from 'react'
import {Route} from 'react-router'
import Home from './Home'
import City from './City'
import Sf from './Sf'

module.exports = (
  <Route path='/' component={Home}>
    <Route path='/cities' component={City} />
      <Route path='/cities/san-francisco' component={Sf} />
  </Route>
)
