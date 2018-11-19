import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'select-single',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-select [options]="options" [(selected)]="selected" placeholder="Select"></e-select>
  `
})
export class SelectSingleComponent implements OnInit {
  public options: Array<IOption> = [
    {label: 'One', value: 'one'},
    {label: 'Two', value: 'two'},
    {label: 'Three', value: 'three'}
  ];

  selected: string;

  constructor() { }

  ngOnInit() {
  }

}
