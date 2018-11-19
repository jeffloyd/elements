import React, { Component } from 'react'
import Navbar from '../include/Navbar'
import Sidebar from '../include/Sidebar'

class DefaultLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="e-content">
          <div className="row">
            <div className="col">
              <Navbar/>
            </div>
          </div>
          <div className="row flex-lg-nowrap">
            <Sidebar className="d-none d-lg-block"/>
            <div className="col">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DefaultLayout
