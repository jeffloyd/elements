import React, { Component } from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Overview from './components/pages/Overview'
import Users from './components/pages/Users'
import Settings from './components/pages/Settings'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/pages/overview" component={Overview}/>
        <Route path="/pages/users" component={Users}/>
        <Route path="/pages/settings" component={Settings}/>
        <Redirect from="/" to="/pages/overview"/>
      </Switch>
    )
  }
}

export default App;
