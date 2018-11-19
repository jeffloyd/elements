import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ENavbarComponent implements OnInit {
  @Input() title: string = '';
  @Input() navInCenter: boolean = false;
  @Input() brandInCenter: boolean = false;
  @Input() class: string = '';
  isCollapsed: boolean = true;
  classNames: object = {};

  setClassNames() {
    this.classNames = this.class.split(' ').reduce((result, className) => {
      if (className.trim()) {
        result[className.trim()] = true;
      }
      return result;
    }, {})
    this.classNames = Object.assign({}, this.classNames, {
      'e-navbar--nav-in-center': this.navInCenter,
      'e-navbar--brand-in-center': this.brandInCenter
    })
  }

  constructor() {}

  ngOnInit() {
    this.setClassNames()
  }

}
