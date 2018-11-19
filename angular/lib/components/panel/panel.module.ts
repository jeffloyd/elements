import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EPanelComponent } from './panel.component';

const COMPONENTS = [
  EPanelComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS
  ],
  imports: [ CommonModule ]
})
export class EPanelModule {}
