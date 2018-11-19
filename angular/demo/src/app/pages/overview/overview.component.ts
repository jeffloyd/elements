import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageOverviewComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const parent = (window.parent as any);
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

}
