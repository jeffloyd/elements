import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './navline.css'

const propTypes = {
  arrow: PropTypes.bool,
  className: PropTypes.string
}

const defaultProps = {
  arrow: false
}

class ENavline extends Component {
  render() {
    const { className, arrow, ...attributes } = this.props
    const navlineClass = classNames(
      { 'e-navline': true },
      { 'e-navline--arrow': this.props.arrow },
      className
    )

    return (
      <div className={navlineClass} {...attributes}>{ this.props.children }</div>
    );
  }
}

ENavline.propTypes = propTypes
ENavline.defaultProps = defaultProps

export default ENavline
