import * as Color from 'color';

const chartColors = {
  red:   Color('rgba(255, 146, 139, 0.8)'),
  green: Color('rgba(87, 228, 198, 0.8)'),
  blue:  Color('rgba(60, 145, 218, 0.7)')
}

let colors = Object.assign({}, chartColors,
  {
    array() {
      return Object.keys(chartColors).map(color => chartColors[color].string())
    }
  }
)

export default colors
