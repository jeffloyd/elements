import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'datepicker-time',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-datepicker-time [value]="time" placeholder="Time"></e-datepicker-time>
  `
})
export class DatepickerTimeComponent implements OnInit {

  public time: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
