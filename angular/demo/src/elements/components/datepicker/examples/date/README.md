# Datepicker `Date`

Date and time picker based on [ng2-flatpickr](https://github.com/mezoistvan/ng2-flatpickr) component. Its recommended to explore the original library [flatpickr](https://github.com/chmln/flatpickr) as well.

<!-- STORY -->

### Usage
```js
import { EDatepickerModule } from 'elements/components';

@NgModule({
  imports: [EDatepickerModule]
})
```
```html
<e-datepicker [value]="date" placeholder="Date"></e-datepicker>
```

### Inputs

| Name        | Type                                                                            | Default |
|-------------|---------------------------------------------------------------------------------|---------|
| config      | `Object` - See the original [Docs](https://chmln.github.io/flatpickr/options/). | -       |
| value       | `String`, `Date`, `Date[]`                                                      | -       |
| placeholder | `String`                                                                        | -       |

### Outputs

| Name     | Arguments                                   | Description                          |
|----------|---------------------------------------------|--------------------------------------|
| onChange | `$event`: Date[] - Array of selected dates. | Emits when Datepicker value changes. |

### Dependencies

| Name        | Install    |
|-------------|---------|
| [ng2-flatpickr](https://github.com/mezoistvan/ng2-flatpickr) | `npm install ng2-flatpickr --save` |

### See Also
- [flatpickr](https://github.com/chmln/flatpickr)
- [ng2-flatpickr](https://github.com/mezoistvan/ng2-flatpickr)
