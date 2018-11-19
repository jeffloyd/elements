import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import colors from '../../colors'

@Component({
  selector: 'chart-bar-horizontal',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-chart type="horizontalBar" [options]="options" [data]="data" [height]="height"></e-chart>
  `
})
export class ChartBarHorizontalComponent implements OnInit {

  public options: any = {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ],
      yAxes: [
        {
          categoryPercentage: 0.6,
          barPercentage: 0.4,
        }
      ]
    },
  }

  @Input() height: number;

  public data: any = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
      {
        label: 'Horizontal Bar',
        backgroundColor: colors.green.string(),
        borderColor: '#ffffff',
        data: [13, 9, 5]
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
