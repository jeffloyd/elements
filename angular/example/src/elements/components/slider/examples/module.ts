import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { SliderSingleComponent } from './single/single.component';
import { SliderDoubleComponent } from './double/double.component';
import { SliderVariantsComponent } from './variants/variants.component';

const COMPONENTS = [
  SliderSingleComponent,
  SliderDoubleComponent,
  SliderVariantsComponent,
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
export class SliderExamplesModule {}
