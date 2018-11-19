import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EChartModule } from './chart/chart.module';
import { EDatepickerModule } from './datepicker/datepicker.module';
import { EMetricModule } from './metric/metric.module';
import { ENavbarModule } from './navbar/navbar.module';
import { ENavlineModule } from './navline/navline.module';
import { ENavlistModule } from './navlist/navlist.module';
import { EPanelModule } from './panel/panel.module';
import { ESelectModule } from './select/select.module';
import { ESliderModule } from './slider/slider.module';
import { ETableModule } from './table/table.module';
import { ETabsModule } from './tabs/tabs.module';
import { EToggleModule } from './toggle/toggle.module';

export { EChartModule } from './chart/chart.module';
export { EDatepickerModule } from './datepicker/datepicker.module';
export { EMetricModule } from './metric/metric.module';
export { ENavbarModule } from './navbar/navbar.module';
export { ENavlineModule } from './navline/navline.module';
export { ENavlistModule } from './navlist/navlist.module';
export { EPanelModule } from './panel/panel.module';
export { ESelectModule } from './select/select.module';
export { ESliderModule } from './slider/slider.module';
export { ETableModule } from './table/table.module';
export { ETabsModule } from './tabs/tabs.module';
export { EToggleModule } from './toggle/toggle.module';

const MODULES = [
  NgbModule,
  ETableModule,
  EDatepickerModule,
  ESelectModule,
  ESliderModule,
  EToggleModule,
  ENavbarModule,
  ENavlistModule,
  ETabsModule,
  ENavlineModule,
  EPanelModule,
  EMetricModule,
  EChartModule,
]

@NgModule({
  declarations: [],
  exports: [
    ...MODULES,
  ],
  imports: [
    CommonModule,
    ...MODULES,
  ]
})
export class ElementsModule {}
