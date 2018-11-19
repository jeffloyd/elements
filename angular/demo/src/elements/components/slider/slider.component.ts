import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./nouislider.css', './slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ESliderComponent implements OnInit {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() value: number | number[] = 0;
  @Input() variant: string;
  @Output() valueChange = new EventEmitter<number|number[]>();

  public get connect() {
    return this.value instanceof Array ? [false, true, false] : [true, false];
  }

  public setValue(value) {
    this.valueChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
