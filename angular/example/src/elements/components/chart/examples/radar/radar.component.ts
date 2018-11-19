import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import colors from '../../colors'

@Component({
  selector: 'chart-radar',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-chart type="radar" [options]="options" [data]="data" [height]="height"></e-chart>
  `
})
export class ChartRadarComponent implements OnInit {

  public options: any = {
    legend: {
      display: false
    },
    scale: {
      ticks: {
        beginAtZero: true
      }
    }
  }

  @Input() height: number;

  public data: any = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Radar',
        borderColor: colors.green.alpha(0.9).string(),
        backgroundColor: colors.green.alpha(0.5).string(),
        data: [12.5, 12.5, 12.5, 12.5, 12.5, 12.5]
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
