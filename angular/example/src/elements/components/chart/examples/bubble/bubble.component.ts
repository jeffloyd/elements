import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import colors from '../../colors'

@Component({
  selector: 'chart-bubble',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-chart type="bubble" [options]="options" [data]="data" [height]="height"></e-chart>
  `
})
export class ChartBubbleComponent implements OnInit {

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
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
  }

  @Input() height: number;

  public data: any = {
    datasets: [
      {
        label: 'Bubble',
        backgroundColor: colors.green.string(),
        borderColor: '#ffffff',
        data: [
          { x: 3, y: 6, r: 5 },
          { x: 8, y: 4, r: 10 },
          { x: 4, y: 8, r: 3 },
          { x: 1, y: 5, r: 8 },
          { x: 2, y: 1, r: 12 },
          { x: 5, y: 3, r: 6 },
          { x: 3, y: 3, r: 5 },
          { x: 6, y: 6, r: 7 },
        ]
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
