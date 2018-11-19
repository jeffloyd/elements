import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './tabs.css'

const propTypes = {
  nested: PropTypes.bool,
  className: PropTypes.string
}

const defaultProps = {
  nested: false
}

class ETabs extends Component {
  render() {
    const { className, nested, ...attributes } = this.props
    const tabsClass = classNames(
      { 'e-tabs': true },
      { 'e-tabs--nested': this.props.nested },
      className
    )

    return (
      <div className={tabsClass} {...attributes}>{ this.props.children }</div>
    );
  }
}

ETabs.propTypes = propTypes
ETabs.defaultProps = defaultProps

export default ETabs
