import { storiesOf } from '@storybook/angular'
import { Story } from '.storybook/utils/story/index.ts'

import { ENavlineModule } from './navline.module'

import { NavlineDefaultComponent } from './examples/default/default.component'
import { NavlineArrowComponent } from './examples/arrow/arrow.component'

import Default from './examples/default/README.md'
import Arrow from './examples/arrow/README.md'

storiesOf('Components/Navline', module)
  .add('Default', () => (
    Story(
      NavlineDefaultComponent,
      Default,
      {
        declarations: [],
        imports: [ENavlineModule]
      }
    )
  ))

storiesOf('Components/Navline', module)
  .add('Arrow', () => (
    Story(
      NavlineArrowComponent,
      Arrow,
      {
        declarations: [],
        imports: [ENavlineModule]
      }
    )
  ))
