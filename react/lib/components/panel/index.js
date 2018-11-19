import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './panel.css'

const propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  noHead: PropTypes.bool,
  headNode: PropTypes.node,
  titleNode: PropTypes.node,
  subtitleNode: PropTypes.node,
  actionsNode: PropTypes.node,
  className: PropTypes.string
}

const defaultProps = {
  noHead: false
}

class EPanel extends Component {
  render() {
    const {
      className,
      title, subtitle, noHead,
      headNode, titleNode, subtitleNode, actionsNode,
      ...attributes
    } = this.props

    const panelClass = classNames(
      { 'e-panel card': true },
      className
    )

    const Subtitle = this.props.subtitleNode ? this.props.subtitleNode : (
      <small className="px-1">{ this.props.subtitle }</small>
    )

    const Title = this.props.titleNode ? this.props.titleNode : (
      <h6 className="mr-2">
        <span>{ this.props.title }</span>
        { Subtitle }
      </h6>
    )

    const Head = this.props.headNode ? this.props.headNode : (
      <div className="card-title">
        { Title }
        { this.props.actionsNode }
      </div>
    )

    return (
      <div className={panelClass} {...attributes}>
        <div className="card-body">
          { !this.props.noHead && Head }
          { this.props.children }
        </div>
      </div>
    )
  }
}

EPanel.propTypes = propTypes
EPanel.defaultProps = defaultProps

export default EPanel
