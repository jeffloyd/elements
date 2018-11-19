import React, { Component } from 'react'
import Select from 'react-select'

import './select.css'

const defaultProps = {
  isClearable: false
}

class ESelect extends Component {
  render() {
    return (
      <Select
        className={'e-select'}
        classNamePrefix={'e-select'}
        {...this.props}
      />
    )
  }
}

ESelect.defaultProps = defaultProps

export default ESelect
