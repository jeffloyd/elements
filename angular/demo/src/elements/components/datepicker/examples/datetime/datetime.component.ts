import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'datepicker-datetime',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-datepicker-datetime [value]="date" placeholder="Datetime"></e-datepicker-datetime>
  `
})
export class DatepickerDatetimeComponent implements OnInit {

  public date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
