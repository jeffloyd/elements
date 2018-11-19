import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart as ChartJS } from 'chart.js'
import { defaults } from './options'

class EChart extends Component {

  static propTypes = {
    type    : PropTypes.oneOf(['bar', 'line', 'doughnut', 'pie', 'horizontalBar', 'radar', 'polar', 'bubble', 'scatter']).isRequired,
    height  : PropTypes.number,
    width   : PropTypes.number,
    data    : PropTypes.object,
    options : PropTypes.object,
  }

  static defaultProps = {
    options : ChartJS.defaults.global,
  }

  constructor(props) {
    super(props)
    this.chart = null
  }

  componentDidMount() {
    this.createChart(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (!this.chart) {
      return
    }
    this.chart.destroy()
    this.createChart(nextProps)
  }

  componentWillUnmount() {
    this.chart.destroy()
  }

  createChart(props) {
    this.chart = new ChartJS(this.refs.canvas.getContext('2d'), {
      type    : props.type,
      data    : props.data,
      options : Object.assign({}, defaults, props.options),
    })
  }

  render() {
    const { type, data, options, height, width, ...attributes } = this.props;
    return (
      <div {...attributes}>
        <canvas ref="canvas" height={height} width={width} />
      </div>
    );
  }
}

export default EChart
