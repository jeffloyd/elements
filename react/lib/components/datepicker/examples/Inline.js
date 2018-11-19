import React, { Component } from 'react'
import EDatepickerInline from '../types/inline'

class EInlinePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null
    }
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange(value) {
    this.setState({
      date: value
    })
  }

  render() {
    return (
      <EDatepickerInline value={this.state.date} onChange={this.handleDateChange} />
    )
  }
}

export default EInlinePicker
