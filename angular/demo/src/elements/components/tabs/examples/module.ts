import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { TabsDefaultComponent } from './default/default.component';
import { TabsNestedComponent } from './nested/nested.component';

const COMPONENTS = [
  TabsDefaultComponent,
  TabsNestedComponent,
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
export class TabsExamplesModule {}
