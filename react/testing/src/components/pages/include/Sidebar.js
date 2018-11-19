import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ENavlist from '../../../elements/components/navlist'

class Sidebar extends Component {
  render() {
    return (
      <div className="col-12 col-lg-auto mb-3" style={{ width: '200px'}}>
        <div className="card p-3">
          <ENavlist activeBg>
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/pages/overview" className="nav-link px-2">
                  <i className="fa fa-fw fa-bar-chart mr-1"></i>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pages/users" className="nav-link px-2">
                  <i className="fa fa-fw fa-clone mr-1"></i>
                  <span>Users</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pages/settings" className="nav-link px-2">
                  <i className="fa fa-fw fa-cog mr-1"></i>
                  <span>Settings</span>
                </NavLink>
              </li>
            </ul>
          </ENavlist>
        </div>
      </div>
    )
  }
}

export default Sidebar
