import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementsModule } from '../../elements/components';
import { ChartExamplesModule } from '../../elements/components/chart/examples/module';
import { DatepickerExamplesModule } from '../../elements/components/datepicker/examples/module';
import { MetricExamplesModule } from '../../elements/components/metric/examples/module';
import { NavbarExamplesModule } from '../../elements/components/navbar/examples/module';
import { NavlineExamplesModule } from '../../elements/components/navline/examples/module';
import { NavlistExamplesModule } from '../../elements/components/navlist/examples/module';
import { PanelExamplesModule } from '../../elements/components/panel/examples/module';
import { SelectExamplesModule } from '../../elements/components/select/examples/module';
import { TableExamplesModule } from '../../elements/components/table/examples/module';
import { TabsExamplesModule } from '../../elements/components/tabs/examples/module';

const COMPONENTS = []
const MODULES = [
  NgbModule,
  ElementsModule,
  ChartExamplesModule,
  DatepickerExamplesModule,
  MetricExamplesModule,
  NavbarExamplesModule,
  NavlineExamplesModule,
  NavlistExamplesModule,
  PanelExamplesModule,
  SelectExamplesModule,
  TableExamplesModule,
  TabsExamplesModule,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS,
    ...MODULES,
  ],
  imports: [
    CommonModule,
    ...MODULES,
  ]
})
export class ComponentsModule {}
