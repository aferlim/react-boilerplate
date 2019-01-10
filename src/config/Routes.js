import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../Home'
import Dashboard from '../Dashboard'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={Dashboard} />
  </Switch>
)

export default Routes