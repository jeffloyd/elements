import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { EDatepickerComponent } from '../../datepicker.component';

@Component({
  selector: 'e-datepicker-datetime',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../datepicker.component.css'],
  template: `
    <ng2-flatpickr
      [setDate]="date"
      [config]="options"
      [placeholder]="placeholder"></ng2-flatpickr>
  `
})
export class EDatepickerDatetimeComponent extends EDatepickerComponent {

  public options: FlatpickrOptions = {
    dateFormat: 'j M Y H:i',
    enableTime: true,
    time_24hr: true
  };

}
