import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';

import { DatepickerDateComponent } from './date/date.component';
import { DatepickerDatetimeComponent } from './datetime/datetime.component';
import { DatepickerInlineComponent } from './inline/inline.component';
import { DatepickerRangeComponent } from './range/range.component';
import { DatepickerTimeComponent } from './time/time.component';

const COMPONENTS = [
  DatepickerDateComponent,
  DatepickerDatetimeComponent,
  DatepickerInlineComponent,
  DatepickerRangeComponent,
  DatepickerTimeComponent,
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
export class DatepickerExamplesModule {}
