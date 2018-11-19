import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SelectModule } from 'ng-select';

import { ESelectComponent } from './select.component';

const COMPONENTS = [
  ESelectComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS,
    SelectModule
  ],
  imports: [ CommonModule, FormsModule, SelectModule ]
})
export class ESelectModule {}
