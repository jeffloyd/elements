import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import colors from '../../colors'

@Component({
  selector: 'chart-area',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-chart type="line" [options]="options" [data]="data" [height]="height"></e-chart>
  `
})
export class ChartAreaComponent implements OnInit {

  public options: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ],
      xAxes: []
    },
  }

  @Input() height: number;

  public data: any = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu'],
    datasets: [
      {
        label: 'Area',
        borderColor: '#ffffff',
        borderWidth: 2,
        backgroundColor: colors.green.alpha(0.6).string(),
        pointRadius: 3,
        data: [3, 12, 3, 12]
      },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
