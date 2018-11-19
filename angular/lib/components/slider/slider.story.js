import { storiesOf } from '@storybook/angular';
import { Story } from '.storybook/utils/story/index.ts';

import { ESliderModule } from './slider.module';

import { SliderSingleComponent } from './examples/single/single.component';
import { SliderDoubleComponent } from './examples/double/double.component';
import { SliderVariantsComponent } from './examples/variants/variants.component';

import { SliderSingleDemoComponent } from '.storybook/demo/slider/single-demo.component';
import { SliderDoubleDemoComponent } from '.storybook/demo/slider/double-demo.component';

import Single from './examples/single/README.md'
import Double from './examples/double/README.md'
import Variants from './examples/variants/README.md'

storiesOf('Components/Slider', module)
  .add('Single', () => (
    Story(
      SliderSingleDemoComponent,
      Single,
      {
        declarations: [SliderSingleComponent],
        imports: [ESliderModule]
      }
    )
  ))

storiesOf('Components/Slider', module)
  .add('Double', () => (
    Story(
      SliderDoubleDemoComponent,
      Double,
      {
        declarations: [SliderDoubleComponent],
        imports: [ESliderModule]
      }
    )
  ))

storiesOf('Components/Slider', module)
  .add('Variants', () => (
    Story(
      SliderVariantsComponent,
      Variants,
      {
        declarations: [],
        imports: [ESliderModule]
      }
    )
  ))
