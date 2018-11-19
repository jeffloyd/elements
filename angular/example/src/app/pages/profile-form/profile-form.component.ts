import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileFormComponent implements OnInit {

  public data = {
    name: '',
    username: ''
  }

  constructor() { }

  ngOnInit() { }

  @Input() user = {
    name: '',
    username: ''
  }
  @Input() isNew: boolean = false;


}
