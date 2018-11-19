<template>
  <layout-default>
    <div class="row flex-column-reverse flex-lg-row">
      <div class="col-12 col-lg-9 col-xl-10 mb-3">
        <e-panel title="Area Chart" subtitle="Visual Data">
          <area-chart class="mt-3" :height="190"></area-chart>
        </e-panel>
      </div>
      <div class="col-12 col-lg-3 col-xl-2">
        <div class="row">
          <div class="col col-lg-12">
            <e-metric class="mb-3" title="Users" value="3,200" icon="fa-user"></e-metric>
          </div>
          <div class="col col-lg-12">
            <e-metric class="mb-3" title="Tickets" value="1,300" icon="fa-tag"></e-metric>
          </div>
          <div class="col col-lg-12">
            <e-metric class="mb-3" title="Income" value="8,400" icon="fa-usd"></e-metric>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-sm-6 col-xl-4 mb-3">
        <e-panel title="Horizontal Bar" subtitle="">
          <horizontal-bar-chart class="mt-3" :height="200"></horizontal-bar-chart>
        </e-panel>
      </div>
      <div class="col col-sm-6 col-xl-4 mb-3">
        <e-panel title="Line Chart" subtitle="">
          <line-chart class="mt-3" :height="200"></line-chart>
        </e-panel>
      </div>
      <div class="col col-sm-12 col-xl-4 mb-3">
        <e-panel title="Donut Chart" subtitle="">
          <donut-chart class="mt-3" :height="200"></donut-chart>
        </e-panel>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mb-3">
        <basic-table></basic-table>
      </div>
    </div>
  </layout-default>
</template>

<script>
  import LayoutDefault from './layouts/default'
  import AreaChart from './charts/AreaChart'
  import LineChart from './charts/LineChart'
  import DonutChart from './charts/DonutChart'
  import HorizontalBarChart from './charts/HorizontalBarChart'

  import EMetric from 'elements/metric'
  import EPanel from 'elements/panel'
  import BasicTable from 'elements/table/examples/basic-table'

  export default {
    components: {
      LayoutDefault,
      EPanel,
      EMetric,
      AreaChart, LineChart, HorizontalBarChart, DonutChart,
      BasicTable
    },
    data: function() {
      return {}
    },
    mounted: function() {
      const parent = window.parent;
      if (parent.setDemoFrameHeight) {
        parent.setDemoFrameHeight();
      }
    }
  }
</script>

<style lang="scss"></style>
