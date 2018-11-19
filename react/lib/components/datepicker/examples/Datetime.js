import React, { Component } from 'react'
import EDatepickerDatetime from '../types/datetime'

class EDatetimePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
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
      <EDatepickerDatetime value={this.state.date} onChange={this.handleDateChange} placeholder="Datetime" />
    )
  }
}

export default EDatetimePicker
