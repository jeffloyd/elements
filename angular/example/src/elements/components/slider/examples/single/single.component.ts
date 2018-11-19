import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'slider-single',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-slider
      [min]="0"
      [max]="100"
      [(value)]="value"></e-slider>
  `
})
export class SliderSingleComponent implements OnInit {
  public value: number = 50;

  constructor() { }

  ngOnInit() {
  }

}
