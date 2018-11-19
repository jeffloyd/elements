import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

function random() {
  return Math.round(Math.random() * 10000)
}

@Component({
  selector: 'income-trend',
  templateUrl: './income-trend.component.html',
  encapsulation: ViewEncapsulation.None
})
export class IncomeTrendComponent implements OnInit {

  @Input() height: number = 51;
  
  public data = {
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

  public chartOptions: any = {
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

  public chartData: any = {}

  public setChartData(period) {
    const dataset = this.data[period];
    if (dataset) {
      this.chartData = {
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

  private _period: string = Object.keys(this.data)[0];

  public get period(): string {
    return this._period;
  }

  public set period(value) {
    this._period = value;
    this.setChartData(value);
  }

  public get periods(): any {
    return Object.keys(this.data);
  }

  constructor() { }

  ngOnInit() {
    this.setChartData(this.period);
  }

}
