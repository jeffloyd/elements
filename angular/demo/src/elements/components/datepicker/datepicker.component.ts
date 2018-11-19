import {
  Component,
  OnInit, AfterViewInit,
  Input, Output,
  ElementRef,
  EventEmitter,
  ChangeDetectorRef,
  ViewEncapsulation } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import Locale from "flatpickr/dist/l10n/default";

@Component({
  selector: 'e-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EDatepickerComponent implements OnInit, AfterViewInit {

  private globalDefaults: FlatpickrOptions = {
    locale: Object.assign({}, Locale, {
      weekdays: {
        shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      },
      rangeSeparator: " - "
    }),
    disableMobile: true,
    onChange: (value) => this.handleChange(value)
  }

  public input: HTMLElement;
  public options: FlatpickrOptions = {};
  public date: string | Date | Date[];

  @Input() config: FlatpickrOptions = {};
  @Input() placeholder: string = '';
  @Input() value: string | Date | Date[];
  @Output() onChange = new EventEmitter<Date[]>();

  constructor(
    protected element: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.options = Object.assign({}, this.globalDefaults, this.options, this.config)
  }

  ngAfterViewInit() {
    this.input = this.element.nativeElement.querySelector('.ng2-flatpickr-input')
    if (this.input && this.input.classList) {
      this.input.classList.add('form-control');
    }
    if (this.value) {
      this.date = this.value;
      this.cdr.detectChanges();
    }
  }

  handleChange(value) {
    this.onChange.emit(value);
  }

}
