import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageSettingsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const parent = (window.parent as any);
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

  public user = {
    name: 'John Smith',
    username: 'smithy',
    date: new Date().setMonth(0)
  }

}
