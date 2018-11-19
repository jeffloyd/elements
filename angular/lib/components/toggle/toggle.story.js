import { storiesOf } from '@storybook/angular';
import { Story } from '.storybook/utils/story/index.ts';

import { EToggleModule } from './toggle.module'
import { ToggleDefaultComponent } from './examples/default/default.component'
import { ToggleDefaultDemoComponent } from '.storybook/demo/toggle/default-demo.component'

import Default from './examples/default/README.md'

storiesOf('Components/Toggle', module)
  .add('Default', () => (
    Story(
      ToggleDefaultDemoComponent,
      Default,
      {
        declarations: [ToggleDefaultComponent],
        imports: [EToggleModule]
      }
    )
  ))
