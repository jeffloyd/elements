import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'toggle-default',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-toggle></e-toggle>
  `
})
export class ToggleDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
