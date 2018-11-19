import React, { Component } from 'react'
import { colors } from '../options'
import EChart from '../index'

class EDonutChart extends Component {
  constructor(props) {
    super(props)
    this.options = {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20
        }
      }
    }
    this.state = {
      data: {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [
          {
            label: 'Donut',
            backgroundColor: colors.array(),
            hoverBorderColor: '#fff',
            data: [5, 10, 8]
          }
        ]
      }
    }
  }

  render() {
    return (
      <EChart type="doughnut" data={this.state.data} options={this.options} {...this.props}/>
    )
  }
}

export default EDonutChart
