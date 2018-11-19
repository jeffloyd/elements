import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import colors from '../../colors'

@Component({
  selector: 'chart-line',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-chart type="line" [options]="options" [data]="data" [height]="height"></e-chart>
  `
})
export class ChartLineComponent implements OnInit {

  public options: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ],
    },
  }

  @Input() height: number;

  public data: any = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu'],
    datasets: [
      {
        label: 'Line',
        borderColor: colors.green.string(),
        backgroundColor: 'transparent',
        data: [3, 12, 3, 12]
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
