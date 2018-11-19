import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EPanelComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() noHead: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
