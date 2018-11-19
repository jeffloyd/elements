import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { IOption } from 'ng-select';

@Component({
  selector: 'e-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ESelectComponent {
  @Input() options: IOption;
  @Input() multiple: boolean = false;
  @Input() placeholder: string;
  @Input() selected: string | string[];
  @Output() selectedChange = new EventEmitter<string>();

  public setSelected(value) {
    this.selectedChange.emit(value);
  }
}
