import { storiesOf } from '@storybook/angular'
import { Story } from '.storybook/utils/story/index.ts'

import { EDatepickerModule } from './datepicker.module'

import { DatepickerDateComponent } from './examples/date/date.component'
import { DatepickerDatetimeComponent } from './examples/datetime/datetime.component'
import { DatepickerTimeComponent } from './examples/time/time.component'
import { DatepickerRangeComponent } from './examples/range/range.component'
import { DatepickerInlineComponent } from './examples/inline/inline.component'

import { DateDemoComponent } from '.storybook/demo/datepicker/date-demo.component'
import { DatetimeDemoComponent } from '.storybook/demo/datepicker/datetime-demo.component'
import { TimeDemoComponent } from '.storybook/demo/datepicker/time-demo.component'
import { RangeDemoComponent } from '.storybook/demo/datepicker/range-demo.component'
import { InlineDemoComponent } from '.storybook/demo/datepicker/inline-demo.component'

import Date from './examples/date/README.md'
import Datetime from './examples/datetime/README.md'
import Time from './examples/time/README.md'
import Range from './examples/range/README.md'
import Inline from './examples/inline/README.md'

storiesOf('Components/Datepicker', module)
  .add('Date', () => (
    Story(
      DateDemoComponent,
      Date,
      {
        declarations: [DatepickerDateComponent],
        imports: [EDatepickerModule]
      }
    )
  ))

storiesOf('Components/Datepicker', module)
  .add('Datetime', () => (
    Story(
      DatetimeDemoComponent,
      Datetime,
      {
        declarations: [DatepickerDatetimeComponent],
        imports: [EDatepickerModule]
      }
    )
  ))

storiesOf('Components/Datepicker', module)
  .add('Time', () => (
    Story(
      TimeDemoComponent,
      Time,
      {
        declarations: [DatepickerTimeComponent],
        imports: [EDatepickerModule]
      }
    )
  ))

storiesOf('Components/Datepicker', module)
  .add('Range', () => (
    Story(
      RangeDemoComponent,
      Range,
      {
        declarations: [DatepickerRangeComponent],
        imports: [EDatepickerModule]
      }
    )
  ))

storiesOf('Components/Datepicker', module)
  .add('Inline', () => (
    Story(
      InlineDemoComponent,
      Inline,
      {
        declarations: [DatepickerInlineComponent],
        imports: [EDatepickerModule]
      }
    )
  ))
