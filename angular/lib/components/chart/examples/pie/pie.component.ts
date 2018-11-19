import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import colors from '../../colors'

@Component({
  selector: 'chart-pie',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-chart type="pie" [options]="options" [data]="data" [height]="height"></e-chart>
  `
})
export class ChartPieComponent implements OnInit {

  public options: any = {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        padding: 20
      }
    }
  }

  @Input() height: number;

  public data: any = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
      {
        label: 'Pie',
        backgroundColor: colors.array(),
        hoverBorderColor: '#fff',
        data: [5, 10, 8]
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
