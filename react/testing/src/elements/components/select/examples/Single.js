import React, { Component } from 'react'
import ESelect from '../index'

class ESelectSingle extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      selected: null
    }
  }

  handleChange(option) {
    this.setState({
      selected: option
    })
  }

  render() {
    const options = [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 3, label: 'Three' }
    ]

    return (
      <ESelect
        value={this.state.selected}
        options={options}
        onChange={this.handleChange}
        placeholder="Single"
      />
    )
  }
}

export default ESelectSingle
