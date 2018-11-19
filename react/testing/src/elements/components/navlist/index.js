import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './navlist.css'

const propTypes = {
  activeBg: PropTypes.bool,
  activeBold: PropTypes.bool,
  className: PropTypes.string
}

const defaultProps = {
  activeBg: false,
  activeBold: false
}

class ENavlist extends Component {
  render() {
    const { className, activeBg, activeBold, ...attributes } = this.props
    const navlistClass = classNames(
      { 'e-navlist': true },
      { 'e-navlist--active-bg': this.props.activeBg },
      { 'e-navlist--active-bold': this.props.activeBold },
      className
    )

    return (
      <div className={navlistClass} {...attributes}>{ this.props.children }</div>
    );
  }
}

ENavlist.propTypes = propTypes
ENavlist.defaultProps = defaultProps

export default ENavlist
