import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EChartComponent } from './chart.component';

const COMPONENTS = [
  EChartComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS
  ],
  imports: [ CommonModule ]
})
export class EChartModule {}
