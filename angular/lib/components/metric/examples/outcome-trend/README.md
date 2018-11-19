# Metric `Trend`

The extension of the default [Metric](/?selectedKind=Components/Metric&selectedStory=Default) component with the chart of previous values.

<!-- STORY -->

### Usage
```js
import { EMetricModule } from 'elements/components';

@NgModule({
  imports: [EMetricModule]
})
```
```html
<e-metric [title]="'Outcome'" [value]="data[period][0]" icon="fa-yen" iconDark={{true}}>
  <div class="d-flex justify-content-center mt-3">
    <div class="btn-group">
      <button
        *ngFor="let field of periods"
        class="btn btn-sm btn-outline-secondary"
        [ngClass]="{ 'active': field == period }"
        (click)="period = field">{{ field }}</button>
    </div>
  </div>
  <div class="mt-3 position-relative">
    <e-chart
      type="bar"
      [data]="chartData"
      [options]="chartOptions"
      [height]="height"></e-chart>
  </div>
</e-metric>

```

### Dependencies

| Name        | Install    |
|-------------|---------|
| [angular2-chartjs](https://github.com/emn178/angular2-chartjs) | `npm install angular2-chartjs --save` |

### See Also
- [Chart.js](http://www.chartjs.org/)
- [angular2-chartjs](https://github.com/emn178/angular2-chartjs)
