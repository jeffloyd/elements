import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ENavlistComponent implements OnInit {
  @Input() activeBg: boolean = false;
  @Input() activeBold: boolean = false;

  get classNames(): object {
    return {
      'e-navlist--active-bg': this.activeBg,
      'e-navlist--active-bold': this.activeBold
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
