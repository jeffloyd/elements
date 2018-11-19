# Chart `Area`

Area charts are basically the Line charts with filled backgrounds. For complete configuration notes, please, refer to the original [Chart.js - Line](http://www.chartjs.org/docs/latest/charts/line.html) documentation.

<!-- STORY -->

### Usage

```js
import { EChartModule } from 'elements/components';

@NgModule({
  imports: [ChartModule]
})
```
```html
<e-chart type="line" [options]="options" [data]="data" [height]="height"></e-chart>
```

### Inputs

| Name    | Type                                |
|---------|-------------------------------------|
| type    | String. `bar`, `line`, `doughnut`, `pie`, `horizontalBar`, `radar`, `polar`, `bubble` or `scatter` |
| data    | Object                                                                                             |
| options | Object                                                                                             |
| height  | Number                                                                                             |

### Dependencies

| Name        | Install    |
|-------------|---------|
| [angular2-chartjs](https://github.com/emn178/angular2-chartjs) | `npm install angular2-chartjs --save` |


### See Also
- [Chart.js](http://www.chartjs.org/)
- [angular2-chartjs](https://github.com/emn178/angular2-chartjs)
