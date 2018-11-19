/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'

class Bootstrap extends Component {
  constructor(props) {
    super(props)
    this.iframe = null
    this.setIFrameHeight = this.setIFrameHeight.bind(this)
  }

  componentDidMount() {
    window.parent.addEventListener('resize', this.setIFrameHeight)
  }

  componentWillUnmount() {
    window.parent.removeEventListener('resize', this.setIFrameHeight)
  }

  setIFrameHeight() {
    if (this.iframe) {
      const iframe = this.iframe;
      const parent = window.parent;
      if (iframe) {
        iframe.height = ""
        const doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document
        const height = Math.max( doc.body.scrollHeight, doc.body.offsetHeight )
        this.iframe.height = height + "px"
        if (parent.setDemoFrameHeight) {
          parent.setDemoFrameHeight()
        }
      }
    }
  }

  render() {
    return (
      <div className="e-content">
        <iframe
          id="k-sink"
          className="border-0 w-100 align-top"
          title="Bootstrap 4 Kitchen Sink"
          src="../../../k-sink.html"
          ref={(iframe) => this.iframe = iframe}
          onLoad={this.setIFrameHeight}
          style={{ minHeight: '101vh', overflow: 'hidden' }} />
      </div>
    )
  }
}

export default Bootstrap
