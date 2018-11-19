import React, { Component } from 'react'
import EChart from '../../../elements/components/chart'
import { colors } from '../../../elements/components/chart/options'

class BarHorizontalChart extends Component {
  constructor(props) {
    super(props)
    this.options = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true
            },
          }
        ],
        yAxes: [
          {
            categoryPercentage: 0.6,
            barPercentage: 0.8,
          }
        ]
      },
    }
    this.state = {
      data: {
        labels: ['Vue', 'Angular', 'React', 'Ember'],
        datasets: [
          {
            label: 'One',
            backgroundColor: colors.green.string(),
            data: [35, 25, 40, 20]
          },
          {
            label: 'Two',
            backgroundColor: colors.blue.string(),
            data: [40, 15, 35, 30]
          }
        ]
      }
    }
  }

  render() {
    return (
      <EChart type="horizontalBar" data={this.state.data} options={this.options} {...this.props}/>
    )
  }
}

export default BarHorizontalChart
