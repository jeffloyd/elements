import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EMetricComponent } from './metric.component';

const COMPONENTS = [
  EMetricComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS
  ],
  imports: [ CommonModule ]
})
export class EMetricModule {}
