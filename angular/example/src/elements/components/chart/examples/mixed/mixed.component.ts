import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import colors from '../../colors'

@Component({
  selector: 'chart-mixed',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-chart type="bar" [options]="options" [data]="data" [height]="height"></e-chart>
  `
})
export class ChartMixedComponent implements OnInit {

  public options: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ],
      xAxes: [
        {
          categoryPercentage: 0.6,
          barPercentage: 0.4,
        }
      ]
    },
  }

  @Input() height: number;

  public data: any = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu'],
    datasets: [
      {
        type: 'line',
        label: 'Line',
        borderColor: colors.red.string(),
        backgroundColor: 'transparent',
        data: [3, 12, 3, 12]
      },
      {
        type: 'bar',
        label: 'Bar',
        backgroundColor: colors.green.string(),
        borderColor: '#ffffff',
        data: [11, 8, 13, 6]
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
