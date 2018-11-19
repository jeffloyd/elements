# Slider `Variants`

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
<e-slider [variant]="primary" [value]="50"></e-slider>
<e-slider [variant]="secondary" [value]="50"></e-slider>
<e-slider [variant]="info" [value]="50"></e-slider>
<e-slider [variant]="success" [value]="50"></e-slider>
<e-slider [variant]="warning" [value]="50"></e-slider>
<e-slider [variant]="danger" [value]="50"></e-slider>
<e-slider [variant]="light" [value]="50"></e-slider>
<e-slider [variant]="dark" [value]="50"></e-slider>
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
