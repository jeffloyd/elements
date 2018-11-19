import { storiesOf } from '@storybook/angular';
import { Story } from '.storybook/utils/story/index.ts';

import { ETableModule } from './table.module';
import { ENavlistModule } from '../navlist/navlist.module'
import { EPanelModule } from '../panel/panel.module'

import { TableBasicComponent } from './examples/basic/basic.component'
import { TableAdvancedComponent } from './examples/advanced/advanced.component'

import { TableBasicDemoComponent } from '.storybook/demo/table/basic-demo.component'
import { TableAdvancedDemoComponent } from '.storybook/demo/table/advanced-demo.component'

import Basic from './examples/basic/README.md'
import Advanced from './examples/advanced/README.md'

storiesOf('Components/Table', module)
  .add('Basic', () => (
    Story(
      TableBasicDemoComponent,
      Basic,
      {
        declarations: [TableBasicComponent],
        imports: [ETableModule, ENavlistModule, EPanelModule]
      }
    )
  ))

storiesOf('Components/Table', module)
  .add('Advanced', () => (
    Story(
      TableAdvancedDemoComponent,
      Advanced,
      {
        declarations: [TableAdvancedComponent],
        imports: [ETableModule, ENavlistModule, EPanelModule]
      }
    )
  ))
