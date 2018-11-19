import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Overview from './pages/Overview'
import Users from './pages/Users'
import Settings from './pages/Settings'

class Pages extends Component {
  render() {
    return (
      <Switch>
        <Route path="/pages/overview" component={Overview}/>
        <Route path="/pages/users" component={Users}/>
        <Route path="/pages/settings" component={Settings}/>
        <Redirect from="/pages/" to="/pages/overview"/>
      </Switch>
    )
  }
}

export default Pages
