import { storiesOf } from '@storybook/angular'
import { Story } from '.storybook/utils/story/index.ts'

import { EPanelModule } from './panel.module'

import { PanelDefaultComponent } from './examples/default/default.component'
import { PanelCustomHeadComponent } from './examples/custom-head/custom-head.component'
import { PanelActionsComponent } from './examples/actions/actions.component'

import { PanelDefaultDemoComponent } from '.storybook/demo/panel/default-demo.component'
import { PanelCustomHeadDemoComponent } from '.storybook/demo/panel/custom-head-demo.component'
import { PanelActionsDemoComponent } from '.storybook/demo/panel/actions-demo.component'

import Default from './examples/default/README.md'
import CustomHead from './examples/custom-head/README.md'
import Actions from './examples/actions/README.md'

storiesOf('Components/Panel', module)
  .add('Default', () => (
    Story(
      PanelDefaultDemoComponent,
      Default,
      {
        declarations: [PanelDefaultComponent],
        imports: [EPanelModule]
      }
    )
  ))

storiesOf('Components/Panel', module)
  .add('Actions', () => (
    Story(
      PanelActionsDemoComponent,
      Actions,
      {
        declarations: [PanelActionsComponent],
        imports: [EPanelModule]
      }
    )
  ))

storiesOf('Components/Panel', module)
  .add('Custom Head', () => (
    Story(
      PanelCustomHeadDemoComponent,
      CustomHead,
      {
        declarations: [PanelCustomHeadComponent],
        imports: [EPanelModule]
      }
    )
  ))
