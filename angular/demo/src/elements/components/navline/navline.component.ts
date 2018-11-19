import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-navline',
  templateUrl: './navline.component.html',
  styleUrls: ['./navline.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ENavlineComponent implements OnInit {
  @Input() arrow: boolean = false;

  get classNames(): object {
    return {
      'e-navline--arrow': this.arrow
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
