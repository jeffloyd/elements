/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import { UncontrolledDropdown as Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

import Components from './components/Components'
import Pages from './components/Pages'
import Bootstrap from './components/Bootstrap'

import './demo.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.togglePagesList = this.togglePagesList.bind(this);
    this.state = {
      pagesListOpen: false
    };
  }

  componentDidMount() {
    if (window === top) {
      document.body.setAttribute('style', '')
    }
  }

  togglePagesList(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <div className="demo-tabs">
          <div className="container">
            <div className="px-sm-3">
              <ul className="nav nav-tabs flex-nowrap">
                <li className="nav-item position-relative">
                  <NavLink to="/pages" className="nav-link px-2 pr-3 px-sm-3 py-1 py-sm-2">
                    <span className="pr-2">Pages</span>
                  </NavLink>
                  <Dropdown className="demo-tabs-dropdown">
                    <DropdownToggle
                      className="my-1 my-sm-2 px-1"
                      onClick={(e) => { e.preventDefault() }}
                      tag="div"
                      caret></DropdownToggle>
                    <DropdownMenu>
                      <div className="dropdown-header">Pages List:</div>
                      <NavLink to="/pages/overview" className="dropdown-item">Overview</NavLink>
                      <NavLink to="/pages/users" className="dropdown-item">Users</NavLink>
                      <NavLink to="/pages/settings" className="dropdown-item">Profile</NavLink>
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <NavLink to="/elements" className="nav-link px-2 px-sm-3 py-1 py-sm-2">Components</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/bootstrap" className="nav-link px-2 px-sm-3 py-1 py-sm-2">Bootstrap</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Switch>
            <Route path="/pages" component={Pages} base="/pages"/>
            <Route path="/elements" component={Components}/>
            <Route path="/bootstrap" component={Bootstrap}/>
            <Redirect from="/" to="/pages"/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
