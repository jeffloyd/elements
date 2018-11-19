# Slider `Single`

Custom slider element based on [ng2-nouislider](https://github.com/tb/ng2-nouislider) component.

<!-- STORY -->

### Usage
```js
import { ESliderModule } from 'elements/components';

@NgModule({
  imports: [ESliderModule]
})
```
```html
<e-slider [min]="0" [max]="100" [(value)]="value"></e-slider>
```

### Inputs

| Name     | Type                                        | Default |
|----------|---------------------------------------------|---------|
| min      | Number                                      | `0`     |
| max      | Number                                      | `100`   |
| value    | Number, Number[]                            | `0`     |
| variant  | String: `primary`, `success`, etc.          | -       |

### Outputs

| Name        | Arguments                   |
|-------------|-----------------------------|
| valueChange | value: `number`, `Number[]` |



### Dependencies

| Name                                                   | Install                             |
|--------------------------------------------------------|-------------------------------------|
| [nouislider](https://github.com/leongersen/noUiSlider) | `npm install nouislide --save`      |
| [ng2-nouislider](https://github.com/tb/ng2-nouislider) | `npm install ng2-nouislider --save` |

### See Also
- [ng2-nouislider](https://github.com/tb/ng2-nouislider)
- [nouislider](https://github.com/leongersen/noUiSlider)
