import React, { Component } from 'react'
import EChart from '../../../elements/components/chart'
import { colors } from '../../../elements/components/chart/options'

class AreaChart extends Component {
  constructor(props) {
    super(props)
    this.options = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: true,
              color: 'rgb(240, 240, 240)',
              drawBorder: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: 'rgb(240, 240, 240)',
              zeroLineColor: 'rgb(240, 240, 240)',
              drawTicks: false
            },
            ticks: {
              display: false
            }
          }
        ]
      }
    }
    this.state = {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Dataset 1',
            borderColor: colors.green.alpha(0.9).string(),
            backgroundColor: colors.green.alpha(0.7).string(),
            borderWidth: 2,
            pointRadius: 0,
            data: [10, 5, 10, 5, 20, 10, 5, 35, 15, 25, 10, 15],
          },
          {
            label: 'Dataset 3',
            borderColor: colors.red.alpha(0.9).string(),
            backgroundColor: colors.red.alpha(0.7).string(),
            borderWidth: 2,
            pointRadius: 0,
            data: [20, 35, 35, 25, 75, 40, 85, 10, 45, 15, 25, 10],
          },
          {
            label: 'Dataset 2',
            borderColor: colors.blue.alpha(0.9).string(),
            backgroundColor: colors.blue.alpha(0.7).string(),
            borderWidth: 2,
            pointRadius: 0,
            data: [30, 80, 50, 60, 35, 10, 0, 5, 20, 40, 70, 40],
          }
        ]
      }
    }
  }

  render() {
    return (
      <EChart type="line" data={this.state.data} options={this.options} {...this.props}/>
    )
  }
}

export default AreaChart
