import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { ChartAreaComponent } from './area/area.component';
import { ChartAreaSharpComponent } from './area-sharp/area-sharp.component';
import { ChartAreaTripleComponent } from './area-triple/area-triple.component';
import { ChartBarComponent } from './bar/bar.component';
import { ChartBarHorizontalComponent } from './bar-horizontal/bar-horizontal.component';
import { ChartBarHorizontalDualComponent } from './bar-horizontal-dual/bar-horizontal-dual.component';
import { ChartBubbleComponent } from './bubble/bubble.component';
import { ChartDonutComponent } from './donut/donut.component';
import { ChartLineComponent } from './line/line.component';
import { ChartMixedComponent } from './mixed/mixed.component';
import { ChartPieComponent } from './pie/pie.component';
import { ChartRadarComponent } from './radar/radar.component';

const COMPONENTS = [
  ChartAreaComponent,
  ChartAreaTripleComponent,
  ChartAreaSharpComponent,
  ChartBarComponent,
  ChartBarHorizontalComponent,
  ChartBarHorizontalDualComponent,
  ChartBubbleComponent,
  ChartDonutComponent,
  ChartLineComponent,
  ChartMixedComponent,
  ChartPieComponent,
  ChartRadarComponent,
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
export class ChartExamplesModule {}
