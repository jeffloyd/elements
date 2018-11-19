import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './metric.css'

const propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  iconDark: PropTypes.bool,
  className: PropTypes.string
}

const defaultProps = {
  title: 'Metric',
  value: '0',
  iconDark: false
}

class EMetric extends Component {
  render() {
    const {
      className,
      title, value, icon, iconDark,
      ...attributes
    } = this.props

    const metricClass = classNames(
      { 'e-metric card': true },
      className
    )

    return (
      <div className={metricClass} {...attributes}>
        <div className="card-body">
          <div className="e-metric__main">
            <span className="e-metric__ico fa-stack">
              <i className={classNames('fa fa-circle fa-stack-2x', { 'text-light': !iconDark })}></i>
              <i className={classNames('fa fa-stack-1x', this.props.icon, { 'fa-inverse': iconDark })}></i>
            </span>
            <div className="e-metric__text px-2">
              <span className="e-metric__value h5 m-0">{ String(this.props.value) }</span>
              <div className="e-metric__title">
                <small className="text-muted">{ this.props.title }</small>
              </div>
            </div>
          </div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

EMetric.propTypes = propTypes
EMetric.defaultProps = defaultProps

export default EMetric
