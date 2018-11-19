import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { ToggleDefaultComponent } from './default/default.component';

const COMPONENTS = [
  ToggleDefaultComponent,
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
export class ToggleExamplesModule {}
