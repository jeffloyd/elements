import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'datepicker-range',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-datepicker-range [value]="dates" placeholder="Range"></e-datepicker-range>
  `
})
export class DatepickerRangeComponent implements OnInit {

  public dates: Date[] = [];

  constructor() { }

  ngOnInit() {
  }

}
