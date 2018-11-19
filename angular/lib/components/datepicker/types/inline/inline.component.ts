import { Component, ViewEncapsulation, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { EDatepickerComponent } from '../../datepicker.component';

@Component({
  selector: 'e-datepicker-inline',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../datepicker.component.css'],
  template: `
    <ng2-flatpickr
      class="d-none"
      [setDate]="date"
      [config]="options"></ng2-flatpickr>
  `
})
export class EDatepickerInlineComponent extends EDatepickerComponent {

  public options: FlatpickrOptions = {
    inline: true,
    appendTo: this.element.nativeElement
  }

  constructor(element: ElementRef, cdr: ChangeDetectorRef) {
    super(element, cdr)
  }

}
