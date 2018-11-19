import React, { Component } from 'react'
import EToggle from '../index'

class EToggleDefault extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      checked: true
    }
  }

  handleChange(value) {
    if (value !== this.state.checked) {
      this.setState({
        checked: value
      })
    }
  }

  render() {
    return (
      <EToggle checked={this.state.checked} onChange={this.handleChange} />
    )
  }
}

export default EToggleDefault
