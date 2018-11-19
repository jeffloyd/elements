import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { NavbarDefaultComponent } from './default/default.component';
import { NavbarBrandInCenterComponent } from './brand-in-center/brand-in-center.component';
import { NavbarNavInCenterComponent } from './nav-in-center/nav-in-center.component';

const COMPONENTS = [
  NavbarDefaultComponent,
  NavbarBrandInCenterComponent,
  NavbarNavInCenterComponent,
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
export class NavbarExamplesModule {}
