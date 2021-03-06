# Metric `Trend`

The extension of the default [Metric](/?selectedKind=Components/Metric&selectedStory=Default) component with the chart of previous values.

<!-- STORY -->

### Usage

```jsx
import React, { Component } from 'react'
import classNames from 'classnames'
import EMetric from '../index'
import EChart from '../../chart'

class IncomeTrend extends Component {
  constructor(props) {
    super(props)
    this.changePeriod = this.changePeriod.bind(this)
    this.state = {
      period: null,
      data: null
    }
  }

  componentWillMount() {
    this.setState({
      period: Object.keys(data)[0]
    })
  }

  changePeriod(period) {
    if (this.state.period !== period) {
      this.setState({
        period: period
      })
    }
  }

  getData(period) {
    if (data[period]) {
      const dataset = data[period];
      return {
        labels: Object.keys(dataset),
        datasets: [
          {
            label: "Income Trend",
            backgroundColor: '#f5f6f8',
            borderColor: '#686e71',
            data: Object.keys(dataset).map((key) => dataset[key]),
            fill: 'start',
          }
        ]
      }
    }
  }

  render() {
    const currentValue = data[this.state.period][0],
          currentData =this.getData(this.state.period)

    return (
      <EMetric title="Income" value={currentValue} icon="fa-usd" iconDark>
        <div className="d-flex justify-content-center mt-3">
          <div className="btn-group">
            { Object.keys(data).map((field) => (
              <button
                className={classNames('btn btn-sm btn-outline-secondary', { 'active': field == this.state.period })}
                onClick={() => this.changePeriod(field)}>{ field }</button>
            )) }
          </div>
        </div>
        <div className="mt-3 position-relative">
          <EChart type="line" data={currentData} options={chartOptions} height={this.props.height}/>
        </div>
      </EMetric>
    )
  }
}

const data = {
  'day': {
    0: random(),
    1: random(),
    2: random(),
    3: random(),
    4: random(),
    5: random(),
  },
  'week': {
    0: random() * 7,
    1: random() * 7,
    2: random() * 7,
    3: random() * 7,
    4: random() * 7,
    5: random() * 7,
  },
  'month': {
    0: random() * 30,
    1: random() * 30,
    2: random() * 30,
    3: random() * 30,
    4: random() * 30,
    5: random() * 30,
  }
}

function random() {
  return Math.round(Math.random() * 10000)
}

const chartOptions = {
  legend: { display: false },
  tooltips: { enabled: false },
  layout: {
    padding: {
      left: 10,
      right: 10
    }
  },
  scales: {
    xAxes: [
      { display: false }
    ],
    yAxes: [
      { display: false }
    ]
  }
}

export default IncomeTrend
```

### Props

| Name      | Type             | Default      |
|-----------|------------------|--------------|
| title     | PropTypes.string | `'Metric'`   |
| value     | PropTypes.string | `'0'`        |
| icon      | PropTypes.string | -            |
| darkIcon  | PropTypes.bool   | `false`      |
| children  | PropTypes.node   | -            |

### Dependencies

| Name        | Install    |
|-------------|---------|
| [Chart.js](http://www.chartjs.org/) | `npm install chart.js --save` |
