import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

import { EToggleComponent } from './toggle.component';

const COMPONENTS = [
  EToggleComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS,
    JwBootstrapSwitchNg2Module
  ],
  imports: [ CommonModule, FormsModule, JwBootstrapSwitchNg2Module ]
})
export class EToggleModule {}
