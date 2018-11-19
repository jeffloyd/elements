import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ENavbar from '../../../elements/components/navbar'

class Navbar extends Component {
  render() {
    const Brand = () => (
      <NavLink className="e-logo mx-4" to="/pages/overview">
        <span>Stratos <small>GMF Cloud</small></span>
      </NavLink>
    )
    const CollapseNav = () => (
      <ul className="navbar-nav pt-3 pt-md-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/pages/overview">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pages/users">Environments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pages/users">Deployments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pages/users">Resources</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pages/settings">Settings</NavLink>
        </li>
      </ul>
    )
    const Actions = () => (
      <div>
        <NavLink to="/pages/settings" className="btn btn-success d-md-none">
          <i className="fa fa-user-circle"></i>
        </NavLink>
        <div className="btn-group d-none d-md-block">
          <button className="btn btn-success">
            <i className="fa fa-plus-circle"></i>
          </button>
          <NavLink to="/pages/settings" className="btn btn-success">
            <span className="mx-1">Create</span>
          </NavLink>
        </div>
      </div>
    )

    return (
      <ENavbar
        className="my-3 px-lg-4"
        title="Overview"
        brandNode={<Brand/>}
        collapseNode={<CollapseNav/>}
        actionsNode={<Actions/>} />
    )
  }
}

export default Navbar
