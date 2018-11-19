import { storiesOf } from '@storybook/angular'
import { Story } from '.storybook/utils/story/index.ts'

import { ETabsModule } from './tabs.module'

import { TabsDefaultComponent } from './examples/default/default.component'
import { TabsNestedComponent } from './examples/nested/nested.component'

import Default from './examples/default/README.md'
import Nested from './examples/nested/README.md'

storiesOf('Components/Tabs', module)
  .add('Default', () => (
    Story(
      TabsDefaultComponent,
      Default,
      { imports: [ETabsModule] }
    )
  ))

storiesOf('Components/Tabs', module)
  .add('Nested', () => (
    Story(
      TabsNestedComponent,
      Nested,
      { imports: [ETabsModule] }
    )
  ))
