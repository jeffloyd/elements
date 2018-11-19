import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const parent = (window.parent as any);
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

}
