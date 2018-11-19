import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import colors from '../../colors'

@Component({
  selector: 'chart-bar-horizontal-dual',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-chart type="horizontalBar" [options]="options" [data]="data" [height]="height"></e-chart>
  `
})
export class ChartBarHorizontalDualComponent implements OnInit {

  public options: any = {
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

  @Input() height: number;

  public data: any = {
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

  constructor() { }

  ngOnInit() {
  }

}
