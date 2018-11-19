# Toggle

Custom toggle element based on [jw-bootstrap-switch-ng2](https://github.com/JulioWar/jw-bootstrap-switch-ng2) component.

<!-- STORY -->

### Usage
```js
import { EToggleModule } from 'elements/components';

@NgModule({
  imports: [EToggleModule]
})
```
```html
<e-toggle [(value)]="value"></e-toggle>
```

### Inputs

| Name     | Type    | Default                                        |
|----------|---------|------------------------------------------------|
| value    | Boolean | `false`                                        |
| disabled | Boolean | `false`                                        |

### Outputs

| Name        | Arguments        |
|-------------|------------------|
| valueChange | value: `boolean` |

### Dependencies

| Name        | Install    |
|-------------|------------|
| [jw-bootstrap-switch-ng2](https://github.com/JulioWar/jw-bootstrap-switch-ng2) | `npm install jw-bootstrap-switch-ng2 --save` |
