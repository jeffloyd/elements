import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ETabsComponent implements OnInit {
  @Input() nested: boolean = false;

  get classNames(): object {
    return {
      'e-tabs--nested': this.nested
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
