import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { NavlistDefaultComponent } from './default/default.component';
import { NavlistActiveBgComponent } from './active-bg/active-bg.component';
import { NavlistActiveBgTooltipsComponent } from './active-bg-tooltips/active-bg-tooltips.component';
import { NavlistActiveBoldComponent } from './active-bold/active-bold.component';

const COMPONENTS = [
  NavlistDefaultComponent,
  NavlistDefaultComponent,
  NavlistActiveBgComponent,
  NavlistActiveBgTooltipsComponent,
  NavlistActiveBoldComponent,
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
export class NavlistExamplesModule {}
