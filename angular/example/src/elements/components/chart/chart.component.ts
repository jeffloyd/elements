import { Component, Input, OnInit, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'e-chart',
  template: '',
  styles: ['e-chart { display: block; }'],
  encapsulation: ViewEncapsulation.None,
})
export class EChartComponent extends ChartComponent {
  private defaultOptions: any = {
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 3
      }
    },
    tooltips: {
      backgroundColor: 'rgb(120, 120, 120)',
      cornerRadius: 3,
    }
  }

  protected setCanvasHeight() {
    if (this.chart && this.height) {
      this.chart.canvas.style.height = this.height + 'px';
    }
  }

  @Input() height: number;

  ngOnInit() {
    this.options = Object.assign({}, this.defaultOptions, this.options);
    super.ngOnInit();
    this.setCanvasHeight();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if (this.chart && changes['height']) {
      this.setCanvasHeight();
    }
  }

}
