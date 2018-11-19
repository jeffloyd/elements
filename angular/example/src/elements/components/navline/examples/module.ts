import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { NavlineDefaultComponent } from './default/default.component';
import { NavlineArrowComponent } from './arrow/arrow.component';

const COMPONENTS = [
  NavlineDefaultComponent,
  NavlineArrowComponent,
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
export class NavlineExamplesModule {}
