import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { TableBasicComponent } from './basic/basic.component';
import { TableAdvancedComponent } from './advanced/advanced.component';

const COMPONENTS = [
  TableBasicComponent,
  TableAdvancedComponent,
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
export class TableExamplesModule {}
