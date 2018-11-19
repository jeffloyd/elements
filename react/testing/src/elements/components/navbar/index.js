import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Collapse } from 'reactstrap'

import './navbar.css'

const propTypes = {
  title: PropTypes.string,
  navInCenter: PropTypes.bool,
  brandInCenter: PropTypes.bool,
  brandNode: PropTypes.node,
  collapseNode: PropTypes.node,
  actionsNode: PropTypes.node,
  className: PropTypes.string
}

const defaultProps = {
  title: '',
  navInCenter: false,
  brandInCenter: false
}

class ENavbar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { className, title, navInCenter, brandInCenter, brandNode, collapseNode, actionsNode, ...attributes } = this.props
    const navbarClass = classNames(
      { 'e-navbar navbar navbar-expand-md card': true },
      { 'e-navbar--nav-in-center': this.props.navInCenter },
      { 'e-navbar--brand-in-center': this.props.brandInCenter },
      className
    )

    return (
      <nav className={navbarClass} {...attributes}>
        <div className="e-navbar__cont flex-md-nowrap py-2">
          <button className="navbar-toggler btn" type="button" onClick={this.toggle}>
            <span className="fa fa-bars"></span>
          </button>
          <div className="navbar-brand d-none d-md-block">
            {this.props.brandNode}
          </div>
          <div className="e-navbar__title navbar-text d-md-none my-2">{this.props.title}</div>
          <Collapse
            className="e-navbar__nav navbar-collapse order-4 order-md-2"
            isOpen={this.state.collapse}
            navbar>
            {this.props.collapseNode}
          </Collapse>
          <div className="e-navbar__actions ml-3">
            {this.props.actionsNode}
          </div>
        </div>
      </nav>
    );
  }
}

ENavbar.propTypes = propTypes
ENavbar.defaultProps = defaultProps

export default ENavbar
