import { storiesOf } from '@storybook/angular'
import { Story } from '.storybook/utils/story/index.ts'

import { ENavlistModule } from './navlist.module'

import { NavlistDefaultComponent } from './examples/default/default.component'
import { NavlistActiveBgComponent } from './examples/active-bg/active-bg.component'
import { NavlistActiveBgTooltipsComponent } from './examples/active-bg-tooltips/active-bg-tooltips.component'
import { NavlistActiveBoldComponent } from './examples/active-bold/active-bold.component'
import { NavlistActiveBgDemoComponent } from '.storybook/demo/navlist/active-bg-demo.component'

import Default from './examples/default/README.md'
import ActiveBgDemo from '.storybook/demo/navlist/active-bg.md'
import ActiveBold from './examples/active-bold/README.md'

storiesOf('Components/Navlist', module)
  .add('Default', () => (
    Story(
      NavlistDefaultComponent,
      Default,
      {
        declarations: [],
        imports: [ENavlistModule]
      },
      { maxWidth: '175px' }
    )
  ))

storiesOf('Components/Navlist', module)
  .add('Active Background', () => (
    Story(
      NavlistActiveBgDemoComponent,
      ActiveBgDemo,
      {
        declarations: [NavlistActiveBgComponent, NavlistActiveBgTooltipsComponent],
        imports: [ENavlistModule]
      }
    )
  ))

storiesOf('Components/Navlist', module)
  .add('Active Bold', () => (
    Story(
      NavlistActiveBoldComponent,
      ActiveBold,
      {
        declarations: [],
        imports: [ENavlistModule]
      },
      { maxWidth: '175px' }
    )
  ))
