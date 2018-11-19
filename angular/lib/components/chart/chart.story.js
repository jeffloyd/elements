import { storiesOf } from '@storybook/angular';
import { Story } from '.storybook/utils/story/index.ts';

import { EChartModule } from '../index'

import { ChartLineComponent } from './examples/line/line.component'
import { ChartAreaComponent } from './examples/area/area.component'
import { ChartBarComponent } from './examples/bar/bar.component'
import { ChartBarHorizontalComponent } from './examples/bar-horizontal/bar-horizontal.component'
import { ChartDonutComponent } from './examples/donut/donut.component'
import { ChartPieComponent } from './examples/pie/pie.component'
import { ChartRadarComponent } from './examples/radar/radar.component'
import { ChartBubbleComponent } from './examples/bubble/bubble.component'
import { ChartMixedComponent } from './examples/mixed/mixed.component'

import { ChartBaseDemoComponent } from '.storybook/demo/chart/base-demo.component'
import { ChartLineDemoComponent } from '.storybook/demo/chart/line-demo.component'
import { ChartAreaDemoComponent } from '.storybook/demo/chart/area-demo.component'
import { ChartBarDemoComponent } from '.storybook/demo/chart/bar-demo.component'
import { ChartBarHorizontalDemoComponent } from '.storybook/demo/chart/bar-horizontal-demo.component'
import { ChartDonutDemoComponent } from '.storybook/demo/chart/donut-demo.component'
import { ChartPieDemoComponent } from '.storybook/demo/chart/pie-demo.component'
import { ChartRadarDemoComponent } from '.storybook/demo/chart/radar-demo.component'
import { ChartBubbleDemoComponent } from '.storybook/demo/chart/bubble-demo.component'
import { ChartMixedDemoComponent } from '.storybook/demo/chart/mixed-demo.component'

import Base from './README.md'
import Line from './examples/line/README.md'
import Area from './examples/area/README.md'
import Bar from './examples/bar/README.md'
import BarHorizontal from './examples/bar-horizontal/README.md'
import Donut from './examples/donut/README.md'
import Pie from './examples/pie/README.md'
import Radar from './examples/radar/README.md'
import Bubble from './examples/bubble/README.md'
import Mixed from './examples/mixed/README.md'

storiesOf('Components/Chart', module)
  .add('Base', () => (
    Story(
      ChartBaseDemoComponent,
      Base,
      {
        declarations: [
          ChartLineComponent,
          ChartAreaComponent,
          ChartBarComponent,
          ChartBarHorizontalComponent,
          ChartDonutComponent,
          ChartPieComponent,
          ChartRadarComponent,
          ChartBubbleComponent,
          ChartMixedComponent
        ],
        imports: [EChartModule]
      }
    )
  ))

storiesOf('Components/Chart', module)
  .add('Line', () => (
    Story(
      ChartLineDemoComponent,
      Line,
      {
        declarations: [ChartLineComponent],
        imports: [EChartModule]
      }
    )
  ))

storiesOf('Components/Chart', module)
  .add('Area', () => (
    Story(
      ChartAreaDemoComponent,
      Area,
      {
        declarations: [ChartAreaComponent],
        imports: [EChartModule]
      }
    )
  ))

storiesOf('Components/Chart', module)
  .add('Bar', () => (
    Story(
      ChartBarDemoComponent,
      Bar,
      {
        declarations: [ChartBarComponent],
        imports: [EChartModule]
      }
    )
  ))

storiesOf('Components/Chart', module)
  .add('Bar Horizontal', () => (
    Story(
      ChartBarHorizontalDemoComponent,
      BarHorizontal,
      {
        declarations: [ChartBarHorizontalComponent],
        imports: [EChartModule]
      }
    )
  ))

storiesOf('Components/Chart', module)
  .add('Donut', () => (
    Story(
      ChartDonutDemoComponent,
      Donut,
      {
        declarations: [ChartDonutComponent],
        imports: [EChartModule]
      }
    )
  ))

storiesOf('Components/Chart', module)
  .add('Pie', () => (
    Story(
      ChartPieDemoComponent,
      Pie,
      {
        declarations: [ChartPieComponent],
        imports: [EChartModule]
      }
    )
  ))

storiesOf('Components/Chart', module)
  .add('Radar', () => (
    Story(
      ChartRadarDemoComponent,
      Radar,
      {
        declarations: [ChartRadarComponent],
        imports: [EChartModule]
      }
    )
  ))

storiesOf('Components/Chart', module)
  .add('Bubble', () => (
    Story(
      ChartBubbleDemoComponent,
      Bubble,
      {
        declarations: [ChartBubbleComponent],
        imports: [EChartModule]
      }
    )
  ))

storiesOf('Components/Chart', module)
  .add('Mixed', () => (
    Story(
      ChartMixedDemoComponent,
      Mixed,
      {
        declarations: [ChartMixedComponent],
        imports: [EChartModule]
      }
    )
  ))
