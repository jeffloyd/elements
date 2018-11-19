# Metric

A tiny component for displaying single values of the important parameters.

<!-- STORY -->

### Usage

```js
import { EMetricComponent } from 'elements/components/metric/metric.component';

@NgModule({
  declarations: [EMetricComponent]
})
```
```html
<e-metric [title]="'Users'"  value="3,200" icon="fa fa-users"></e-metric>
<e-metric [title]="'Income'" value="8,400" icon="fa fa-usd" darkIcon></e-metric>
```

### Inputs

| Name      | Type     | Default      |
|-----------|----------|--------------|
| title     | String   | `'Metric'`   |
| value     | String   | `'0'`        |
| icon      | String   | -            |
| dark-icon | Boolean  | `false`      |

### Content

| Name      | Description |
|-----------|-------------|
| default   | Slot to display under the main content. |
