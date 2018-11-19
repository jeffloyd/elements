import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import colors from '../../colors'

@Component({
  selector: 'chart-area-sharp',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-chart type="line" [options]="options" [data]="data" [height]="height"></e-chart>
  `
})
export class ChartAreaSharpComponent implements OnInit {

  @Input() height: number;
  @Input() ticks: boolean = true;

  public options: any = {
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    spanGaps: false,
    elements: {
      line: {
        tension: 0.000001
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: -80,
            max: 80,
            stepSize: 40,
            padding: 10,
            display: this.ticks
          },
          gridLines: {
            display: true,
            color: 'rgba(0, 0, 0, 0.05)',
            zeroLineColor: 'rgba(255, 146, 139, 0.8)',
            drawTicks: false
          },
        }
      ],
      xAxes: [
        {
          ticks: {
            autoSkip: false
          },
          gridLines: {
            display: true,
            color: 'rgba(0, 0, 0, 0.05)'
          }
        }
      ]
    }
  }

  public data: any = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        borderWidth: 1,
        borderColor: colors.red.alpha(0.9).string(),
        backgroundColor: colors.red.alpha(0.4).string(),
        pointBackgroundColor: colors.red.alpha(0.9).string(),
        radius: 0,
        data: [-60, 20, -40, 40, -20, 60],
        label: 'Dataset',
        fill: 'origin'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
