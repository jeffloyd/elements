import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'select-multiple',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-select
      [options]="options"
      [(selected)]="selected"
      [multiple]="true"
      placeholder="Tags"></e-select>
  `
})
export class SelectMultipleComponent implements OnInit {
  public options: Array<IOption> = [
    {label: 'One', value: 'one'},
    {label: 'Two', value: 'two'},
    {label: 'Three', value: 'three'}
  ];

  selected: string[] = ['one'];

  constructor() { }

  ngOnInit() {
  }

}
