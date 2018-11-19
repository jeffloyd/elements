import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { EDatepickerComponent } from '../../datepicker.component';

@Component({
  selector: 'e-datepicker-range',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../datepicker.component.css'],
  template: `
    <ng2-flatpickr
      [setDate]="date"
      [config]="options"
      [placeholder]="placeholder"></ng2-flatpickr>
  `
})
export class EDatepickerRangeComponent extends EDatepickerComponent {

  public options: FlatpickrOptions = {
    mode: 'range',
    dateFormat: 'd M y',
  };

}
