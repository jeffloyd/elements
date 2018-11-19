import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ENavlineComponent } from './navline.component';

const COMPONENTS = [
  ENavlineComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS
  ],
  imports: [ CommonModule ]
})
export class ENavlineModule {}
