import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NouisliderModule } from 'ng2-nouislider';

import { ESliderComponent } from './slider.component';

const COMPONENTS = [
  ESliderComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS,
    NouisliderModule
  ],
  imports: [ CommonModule, NouisliderModule ]
})
export class ESliderModule {}
