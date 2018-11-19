<template>
  <div class="container">
    <div class="e-content">
      <div class="row">
        <div class="col-12 mt-3">
          <e-navbar-default class="mb-3"></e-navbar-default>
          <e-navbar-nav-center class="mb-3"></e-navbar-nav-center>
          <e-navbar-brand-center class="mb-3"></e-navbar-brand-center>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-3">
          <e-navlist-active-bg></e-navlist-active-bg>
        </div>
        <div class="col-sm-6 col-md-7 col-lg-3 col-xl-2 mb-3">
          <e-navlist-active-bold></e-navlist-active-bold>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-5 col-xl-7">
          <e-tabs-nested class="mb-3"></e-tabs-nested>
          <e-navline-arrow class="mb-3"></e-navline-arrow>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-4 col-xl-5 mb-3">
          <e-tabs-default class="mb-3" style="padding-top: 1px"></e-tabs-default>
          <basic-table></basic-table>
        </div>
        <div class="col-md-12 col-lg-8 col-xl-7 mb-3">
          <advanced-table></advanced-table>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-5">
          <div class="row">
            <div class="col">
              <e-metric class="mb-3" title="Users" value="3,200" icon="fa-user"></e-metric>
            </div>
            <div class="col">
              <e-metric class="mb-3" title="Tickets" value="1,300" icon="fa-tag"></e-metric>
            </div>
            <div class="col d-none d-lg-block">
              <e-metric class="mb-3" title="Income" value="8,400" icon="fa-usd"></e-metric>
            </div>
          </div>
          <div class="row">
            <div class="col col-sm-6 col-lg-12 col-xl-6 mb-3">
              <income-trend></income-trend>
            </div>
            <div class="col col-sm-6 col-lg-12 col-xl-6 mb-3">
              <outcome-trend></outcome-trend>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-7">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-12 col-xl-6 mb-3">
              <e-panel title="Donut Chart">
                <donut-chart :height="223"></donut-chart>
              </e-panel>
            </div>
            <div class="col-12 col-md-6 col-lg-12 col-xl-6 mb-3">
              <e-panel title="Horizontal Bar">
                <horizontal-bar-chart :height="223"></horizontal-bar-chart>
              </e-panel>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col mb-3">
          <e-panel title="Area Chart" subtitle="">
            <template slot="head">
              <div class="h6 font-weight-bold text-center mb-3">Area Chart</div>
            </template>
            <div class="row">
              <div class="col-12 col-lg-10">
                <area-chart :height="250"></area-chart>
              </div>
              <div class="col-12 col-lg-2">
                <div class="h-100 d-flex flex-row flex-wrap justify-content-center flex-lg-column pt-3">
                  <div class="px-3 py-1 py-md-0 text-center">
                    <div class="h4 m-0">$1,200</div>
                    <div class="text-muted">
                      <small>Income</small>
                    </div>
                  </div>
                  <hr class="w-100 d-none d-lg-block">
                  <div class="px-3 py-1 py-md-0 text-center">
                    <div class="h4 m-0">$3,800</div>
                    <div class="text-muted">
                      <small>Outcome</small>
                    </div>
                  </div>
                  <hr class="w-100 d-none d-lg-block">
                  <div class="px-3 py-1 py-md-0 text-center">
                    <div class="h4 m-0">$5,000</div>
                    <div class="text-muted">
                      <small>Turnover</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </e-panel>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-3 col-xl-3 mb-3">
          <login-form></login-form>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <div class="card">
            <e-datepicker-inline></e-datepicker-inline>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-5 col-xl-6 mb-3">
          <e-panel title="Form Controls" subtitle="Custom Plugins">
            <form class="mt-3">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text flex-column">
                          <div class="fa-fw position-relative" style="background-color: inherit; flex: 1;">
                            <i class="fa fa-fw fa-calendar-o position-absolute" style="left: -17%; top: 0;"></i>
                            <i class="fa fa-fw fa-clock-o position-absolute" style="left: 17%; bottom: 0; background-color: inherit;"></i>
                          </div>
                        </span>
                      </span>
                      <e-datepicker-datetime></e-datepicker-datetime>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text flex-column">
                          <div class="position-relative fa-fw" style="background-color: inherit; flex: 1;">
                            <i class="fa fa-fw fa-calendar-o position-absolute" style="left: -17%; top: 0;"></i>
                            <i class="fa fa-fw fa-calendar position-absolute" style="left: 17%; bottom: 0; background-color: inherit;"></i>
                          </div>
                        </span>
                      </span>
                      <e-datepicker-range></e-datepicker-range>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-fw fa-clock-o"></i>
                        </span>
                      </span>
                      <e-datepicker-time></e-datepicker-time>
                    </div>
                  </div>
                  <div class="form-group mb-md-0">
                    <e-datepicker-addons></e-datepicker-addons>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <e-select-single></e-select-single>
                  </div>
                  <div class="form-group">
                    <e-select-multiple></e-select-multiple>
                  </div>
                  <div class="form-group mb-0">
                    <div style="margin-bottom: 6px;">
                      <e-slider
                        :value="50"></e-slider>
                      <e-slider
                        :value="[25, 75]"></e-slider>
                    </div>
                    <div class="d-flex justify-content-center">
                      <e-toggle
                        class="mr-1"
                        style="margin: 6px 0;"
                        :value="true"></e-toggle>
                      <e-toggle
                        style="margin: 6px 0;"
                        :value="false"></e-toggle>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </e-panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ENavbarDefault from 'elements/navbar/examples/default'
  import ENavbarNavCenter from 'elements/navbar/examples/nav-in-center'
  import ENavbarBrandCenter from 'elements/navbar/examples/brand-in-center'

  import ETabsDefault from 'elements/tabs/examples/default'
  import ETabsNested from 'elements/tabs/examples/nested'

  import ENavlistActiveBg from 'elements/navlist/examples/active-bg'
  import ENavlistActiveBold from 'elements/navlist/examples/active-bold'

  import ENavlineArrow from 'elements/navline/examples/arrow'

  import BasicTable from 'elements/table/examples/basic-table'
  import AdvancedTable from 'elements/table/examples/advanced-table'

  import EMetric from 'elements/metric'
  import IncomeTrend from 'elements/metric/examples/income-trend'
  import OutcomeTrend from 'elements/metric/examples/outcome-trend'

  import DonutChart from 'elements/chart/examples/donut'
  import HorizontalBarChart from 'elements/chart/examples/bar-horizontal-dual'
  import AreaChart from 'elements/chart/examples/area-triple'

  import LoginForm from 'elements/panel/examples/login-form'

  import EDatepickerInline from 'elements/datepicker/examples/inline'
  import EDatepickerDatetime from 'elements/datepicker/examples/datetime'
  import EDatepickerRange from 'elements/datepicker/examples/range'
  import EDatepickerTime from 'elements/datepicker/examples/time'
  import EDatepickerAddons from 'elements/datepicker/examples/addons'

  import EPanel from 'elements/panel'

  import ESelectSingle from 'elements/select/examples/single'
  import ESelectMultiple from 'elements/select/examples/multiple'

  import EToggle from 'elements/toggle'
  import ESlider from 'elements/slider'

  export default {
    components: {
      ENavbarDefault, ENavbarNavCenter, ENavbarBrandCenter,
      ETabsDefault, ETabsNested,
      ENavlistActiveBg, ENavlistActiveBold,
      ENavlineArrow,
      BasicTable, AdvancedTable,
      EMetric, IncomeTrend, OutcomeTrend,
      DonutChart, HorizontalBarChart, AreaChart,
      LoginForm,
      EDatepickerInline, EDatepickerRange, EDatepickerDatetime, EDatepickerTime, EDatepickerAddons,
      EPanel,
      ESelectSingle, ESelectMultiple,
      EToggle,
      ESlider
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
