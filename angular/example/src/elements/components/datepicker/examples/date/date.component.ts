import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'datepicker-date',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-datepicker [value]="date" placeholder="Date"></e-datepicker>
  `
})
export class DatepickerDateComponent implements OnInit {
  public date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
