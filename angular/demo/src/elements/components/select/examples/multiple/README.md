# Select `Multiple \ Tags`

Custom select element based on [ng-select](https://github.com/basvandenberg/ng-select) component.

<!-- STORY -->

### Usage
```js
import { ESelectModule } from 'elements/components';

@NgModule({
  imports: [ESelectModule]
})
```
```html
<e-select
  [options]="options"
  [(selected)]="selected"
  [multiple]="true"
  [placeholder]="'Tags'"></e-select>
```

### Inputs

| Name        | Type                                |
|-------------|-------------------------------------|
| options     | [IOption[]](https://basvandenberg.github.io/ng-select#/documentation) |
| selected       | `string` or `string[]`           |
| placeholder | `string`                            |
| multiple    | `boolean`                           |

### Outputs
| Name        | Type                                |
|-------------|-------------------------------------|
| selected       | `string` or `string[]`           |


### Dependencies

| Name                                                      | Install                           |
|-----------------------------------------------------------|-----------------------------------|
| [ng-select](https://github.com/basvandenberg/ng-select)   | `npm install ng-select --save` |

### See Also
- [ng-select](https://github.com/basvandenberg/ng-select)
