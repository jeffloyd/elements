import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { IncomeTrendComponent } from './income-trend/income-trend.component';
import { OutcomeTrendComponent } from './outcome-trend/outcome-trend.component';

const COMPONENTS = [
  IncomeTrendComponent,
  OutcomeTrendComponent,
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
export class MetricExamplesModule {}
