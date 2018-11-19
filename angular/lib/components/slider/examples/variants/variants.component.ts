import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'slider-variants',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="row w-100">
      <div class="col-md-3 mb-3">
        <div class="card p-2">
          <e-slider [variant]="'primary'" [value]="50"></e-slider>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card p-2">
          <e-slider [variant]="'secondary'" [value]="50"></e-slider>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card p-2">
          <e-slider [variant]="'success'" [value]="50"></e-slider>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card p-2">
          <e-slider [variant]="'info'" [value]="50"></e-slider>
        </div>
      </div>
      <div class="col-md-3 mb-3 mb-md-0">
        <div class="card p-2">
          <e-slider [variant]="'warning'" [value]="50"></e-slider>
        </div>
      </div>
      <div class="col-md-3 mb-3 mb-md-0">
        <div class="card p-2">
          <e-slider [variant]="'danger'" [value]="50"></e-slider>
        </div>
      </div>
      <div class="col-md-3 mb-3 mb-md-0">
        <div class="card p-2">
          <e-slider [variant]="'light'" [value]="50"></e-slider>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-2">
          <e-slider [variant]="'dark'" [value]="50"></e-slider>
        </div>
      </div>
    </div>
  `
})
export class SliderVariantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
