import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import colors from '../../colors'

@Component({
  selector: 'chart-bar',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-chart type="bar" [options]="options" [data]="data" [height]="height"></e-chart>
  `
})
export class ChartBarComponent implements OnInit {

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
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
      {
        label: 'Bar',
        backgroundColor: colors.green.string(),
        borderColor: '#ffffff',
        data: [7, 10, 13]
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
