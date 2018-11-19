import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'datepicker-inline',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-datepicker-inline (onChange)="handleChange($event)"></e-datepicker-inline>
  `
})
export class DatepickerInlineComponent implements OnInit {
  public handleChange(value) {}
  
  constructor() { }

  ngOnInit() {
  }

}
