import { storiesOf } from '@storybook/angular'
import { Story } from '.storybook/utils/story/index.ts'

import { EMetricModule } from './metric.module'
import { EChartModule } from 'elements/chart/chart.module'

import { IncomeTrendComponent } from './examples/income-trend/income-trend.component'

import { MetricDefaultDemoComponent } from '.storybook/demo/metric/default-demo.component'
import { IncomeTrendDemoComponent } from '.storybook/demo/metric/income-trend-demo.component'


import Default from './README.md'
import Trend from './examples/income-trend/README.md'

storiesOf('Components/Metric', module)
  .add('Default', () => (
    Story(
      MetricDefaultDemoComponent,
      Default,
      {
        declarations: [],
        imports: [EMetricModule]
      }
    )
  ))

storiesOf('Components/Metric', module)
  .add('With Trend', () => (
    Story(
      IncomeTrendDemoComponent,
      Trend,
      {
        declarations: [IncomeTrendComponent],
        imports: [EMetricModule, EChartModule]
      }
    )
  ))
