import { storiesOf } from '@storybook/angular';
import { Story } from '.storybook/utils/story/index.ts';

import { ESelectModule } from './select.module';

import { SelectSingleComponent } from './examples/single/single.component';
import { SelectMultipleComponent } from './examples/multiple/multiple.component';

import { SelectSingleDemoComponent } from '.storybook/demo/select/single-demo.component';
import { SelectMultipleDemoComponent } from '.storybook/demo/select/multiple-demo.component';

import Single from './examples/single/README.md';
import Multiple from './examples/multiple/README.md';

storiesOf('Components/Select', module)
  .add('Single', () => (
    Story(
      SelectSingleDemoComponent,
      Single,
      {
        declarations: [SelectSingleComponent],
        imports: [ESelectModule]
      }
    )
  ))

storiesOf('Components/Select', module)
  .add('Multiple', () => (
    Story(
      SelectMultipleDemoComponent,
      Multiple,
      {
        declarations: [SelectMultipleComponent],
        imports: [ESelectModule]
      }
    )
  ))
