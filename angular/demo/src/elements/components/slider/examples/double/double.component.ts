import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'slider-double',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-slider
      [min]="0"
      [max]="100"
      [(value)]="value"></e-slider>
  `
})
export class SliderDoubleComponent implements OnInit {
  public value: number[] = [25, 75];

  constructor() { }

  ngOnInit() {
  }

}
