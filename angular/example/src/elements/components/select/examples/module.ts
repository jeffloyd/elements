import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { SelectSingleComponent } from './single/single.component';
import { SelectMultipleComponent } from './multiple/multiple.component';

const COMPONENTS = [
  SelectSingleComponent,
  SelectMultipleComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ElementsModule
  ]
})
export class SelectExamplesModule {}
