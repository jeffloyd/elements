<template>
  <e-donut-chart
    :chartData="chartData"
    :options="options"
    :height="height"></e-donut-chart>
</template>

<script>
  import EDonutChart from 'elements/chart/types/donut'
  import { colors } from 'elements/chart/options'

  export default {
    components: { EDonutChart },
    props: {
      height: Number
    },
    data: function() {
      return {
        chartData: {
          labels: ['Angular', 'Vue', 'React'],
          datasets: [
            {
              backgroundColor: colors.array(),
              hoverBorderColor: 'white',
              data: [35, 35, 35]
            }
          ]
        },
        options: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20
            }
          }
        }
      }
    }
  }
</script>
