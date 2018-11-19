import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EMetricComponent implements OnInit {

  @Input() title: string = 'Metric';
  @Input() value: string = '0';
  @Input() icon: string;
  @Input() iconDark: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
