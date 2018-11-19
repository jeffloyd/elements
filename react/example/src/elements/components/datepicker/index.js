import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flatpickr from 'react-flatpickr'
import Locale from "flatpickr/dist/l10n/default"

import "flatpickr/dist/flatpickr.css"
import './datepicker.css'

const globalDefaults = {
  locale: Object.assign({}, Locale, {
    weekdays: {
      shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    },
    rangeSeparator: " - "
  }),
  disableMobile: true
}

const isValidDatesArray = function(dates) {
  if (dates instanceof Array) {
    for(var i = 0; i < dates.length; i++) {
      if (!isValidDateValue(dates[i])) {
        return false
      }
    }
    return true
  }
  return false
}

const isValidDateValue = function(date) {
  return (date instanceof Date) && !isNaN(date.valueOf())
}

const isEqualDatesArrays = function(a, b) {
  if (a instanceof Array && b instanceof Array) {
    if (a.length !== b.length) {
      return false
    }
    a.forEach((date, i) => {
      if ((date.valueOf() !== b[i].valueOf())) {
        return false
      }
    })
    return true
  }
  return false
}

const toArray = function(value) {
  if (!value) {
    return []
  }
  if (!(value instanceof Array)) {
    return [value]
  }
  return value.slice()
}

const propTypes = {
  config: PropTypes.object,
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.arrayOf(PropTypes.instanceOf(Date))
  ]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
}

const defaultProps = {
  config: {},
  value: []
}

class EDatepicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dates: []
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.getOptions = this.getOptions.bind(this)
    this.localDefaults = {}
    this.options = {}
  }

  componentWillMount() {
    this.handleDateChange(toArray(this.props.value))
    this.options = this.getOptions(this.props.config)
  }

  componentWillReceiveProps(nextProps) {
    this.handleDateChange(toArray(nextProps.value))
    this.options = this.getOptions(nextProps.config)
  }

  handleDateChange(value) {
    const dates = value.slice()
    if (isValidDatesArray(dates)) {
      if (!isEqualDatesArrays(dates, this.state.dates)) {
        this.setState({
          dates: dates
        })

        if (this.props.onChange) {
          this.props.onChange(dates)
        }
      }
    }
  }

  getOptions(config) {
    return Object.assign({},
      globalDefaults,
      this.localDefaults,
      config
    )
  }

  render() {
    const {
      className,
      config, value, placeholder, onChange,
      ...attributes
    } = this.props

    const datepickerClass = classNames(
      { 'form-control': true },
      className
    )

    return (
      <Flatpickr
        className={datepickerClass}
        value={this.state.dates}
        options={this.options}
        placeholder={this.props.placeholder}
        onChange={this.handleDateChange}
        {...attributes}/>
    )
  }
}

EDatepicker.propTypes = propTypes
EDatepicker.defaultProps = defaultProps

export default EDatepicker
