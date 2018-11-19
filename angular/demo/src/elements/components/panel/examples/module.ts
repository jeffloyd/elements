import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { PanelDefaultComponent } from './default/default.component';
import { PanelActionsComponent } from './actions/actions.component';
import { PanelCustomHeadComponent } from './custom-head/custom-head.component';
import { PanelLoginFormComponent } from './login-form/login-form.component';

const COMPONENTS = [
  PanelDefaultComponent,
  PanelActionsComponent,
  PanelCustomHeadComponent,
  PanelLoginFormComponent,
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
export class PanelExamplesModule {}
