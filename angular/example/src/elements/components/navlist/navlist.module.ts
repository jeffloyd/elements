import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ENavlistComponent } from './navlist.component';

const COMPONENTS = [
  ENavlistComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS
  ],
  imports: [ CommonModule ]
})
export class ENavlistModule {}
