import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import { EDatepickerComponent } from './datepicker.component';
import { EDatepickerDatetimeComponent } from './types/datetime/datetime.component';
import { EDatepickerInlineComponent } from './types/inline/inline.component';
import { EDatepickerRangeComponent } from './types/range/range.component';
import { EDatepickerTimeComponent } from './types/time/time.component';

const COMPONENTS = [
  EDatepickerComponent,
  EDatepickerDatetimeComponent,
  EDatepickerInlineComponent,
  EDatepickerRangeComponent,
  EDatepickerTimeComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS,
  ],
  imports: [ CommonModule, Ng2FlatpickrModule ]
})
export class EDatepickerModule {}
