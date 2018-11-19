import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./bootstrap-switch.css', './toggle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EToggleComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() value: boolean = false;
  @Output() valueChange = new EventEmitter<boolean>();

  public setValue(value) {
    this.valueChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
