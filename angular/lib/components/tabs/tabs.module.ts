import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ETabsComponent } from './tabs.component';

const COMPONENTS = [
  ETabsComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS
  ],
  imports: [ CommonModule ]
})
export class ETabsModule {}
