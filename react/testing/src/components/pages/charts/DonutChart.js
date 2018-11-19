import React, { Component } from 'react'
import EChart from '../../../elements/components/chart'
import { colors } from '../../../elements/components/chart/options'

class DonutChart extends Component {
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

export default DonutChart
