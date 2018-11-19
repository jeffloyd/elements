import React, { Component } from 'react'
import DefaultLayout from './layouts/Default'
import Profile from './Profile'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: 'John Smith',
        username: 'johnny.s',
        date: 1512792908,
        status: true,
        photo: ''
      }
    }
  }

  componentDidMount() {
    const parent = window.parent; // eslint-disable-line no-restricted-globals
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

  render() {
    return (
      <DefaultLayout>
        <div className="row">
          <div className="col mb-3">
            <div className="card">
              <div className="card-body">
                <Profile user={this.state.user}/>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <div className="card mb-3">
              <div className="card-body">
                <div className="px-xl-3">
                  <button className="btn btn-block btn-secondary">
                    <i className="fa fa-sign-out"></i>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h6 className="card-title font-weight-bold">Support</h6>
                <p className="card-text">Get fast, free help from our friendly assistants.</p>
                <button type="button" className="btn btn-primary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default Settings
