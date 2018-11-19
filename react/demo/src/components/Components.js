import React, { Component } from 'react'

import ENavbarDefault from '../elements/components/navbar/examples/Default'
import ENavbarNavInCenter from '../elements/components/navbar/examples/NavInCenter'
import ENavbarBrandInCenter from '../elements/components/navbar/examples/BrandInCenter'

import ENavlistActiveBold from '../elements/components/navlist/examples/ActiveBold'
import ENavlistActiveBg from '../elements/components/navlist/examples/ActiveBg'
import ENavlistActiveBgTooltips from '../elements/components/navlist/examples/ActiveBgTooltips'

import ENavlineArrow from '../elements/components/navline/examples/Arrow'

import ETabsDefault from '../elements/components/tabs/examples/Default'
import ETabsNested from '../elements/components/tabs/examples/Nested'

import BasicTable from '../elements/components/table/examples/BasicTable'
import AdvancedTable from '../elements/components/table/examples/advanced-table'

import EMetric from '../elements/components/metric'
import IncomeTrend from '../elements/components/metric/examples/IncomeTrend'
import OutcomeTrend from '../elements/components/metric/examples/OutcomeTrend'

import EPanel from '../elements/components/panel'

import DonutChart from '../elements/components/chart/examples/Donut'
import HorizontalBarDualChart from '../elements/components/chart/examples/HorizontalBarDual'
import AreaTripleChart from '../elements/components/chart/examples/AreaTriple'

import LoginForm from '../elements/components/panel/examples/LoginForm'

import EDatepickerInline from '../elements/components/datepicker/examples/Inline'
import EDatepickerDatetime from '../elements/components/datepicker/examples/Datetime'
import EDatepickerRange from '../elements/components/datepicker/examples/Range'
import EDatepickerTime from '../elements/components/datepicker/examples/Time'
import EDatepickerAddons from '../elements/components/datepicker/examples/Addons'

import ESelectSingle from '../elements/components/select/examples/Single'
import ESelectMultiple from '../elements/components/select/examples/Multiple'

import ESliderSingle from '../elements/components/slider/examples/Single'
import ESliderDouble from '../elements/components/slider/examples/Double'

import EToggle from '../elements/components/toggle'

class Components extends Component {
  componentDidMount() {
    const parent = window.parent; // eslint-disable-line no-restricted-globals
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <ENavbarDefault className="mb-3"/>
            <ENavbarNavInCenter className="mb-3"/>
            <ENavbarBrandInCenter className="mb-3"/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-3">
            <div className="d-flex justify-content-between">
              <div style={{flexGrow: 1}}>
                <ENavlistActiveBg/>
              </div>
              <div className="ml-3">
                <ENavlistActiveBgTooltips/>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-7 col-lg-3 col-xl-2 mb-3">
            <ENavlistActiveBold/>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-7 mb-3">
            <ETabsNested className="mb-3"/>
            <ENavlineArrow/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-4 col-xl-5 mb-3" style={{paddingTop: '1px'}}>
            <ETabsDefault className="mb-3"/>
            <BasicTable/>
          </div>
          <div className="col-md-12 col-lg-8 col-xl-7 mb-3">
            <AdvancedTable/>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="row">
              <div className="col">
                <EMetric className="mb-3" title="Users" value="3,200" icon="fa-user"/>
              </div>
              <div className="col">
                <EMetric className="mb-3" title="Tickets" value="1,300" icon="fa-tag"/>
              </div>
              <div className="col d-none d-lg-block">
                <EMetric className="mb-3" title="Income" value="8,400" icon="fa-usd"/>
              </div>
            </div>
            <div className="row">
              <div className="col col-sm-6 col-lg-12 col-xl-6 mb-3">
                <IncomeTrend/>
              </div>
              <div className="col col-sm-6 col-lg-12 col-xl-6 mb-3">
                <OutcomeTrend/>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-12 col-xl-6 mb-3">
                <EPanel title="Donut Chart">
                  <DonutChart height={223}/>
                </EPanel>
              </div>
              <div className="col-12 col-md-6 col-lg-12 col-xl-6 mb-3">
                <EPanel title="Horizontal Bar">
                  <HorizontalBarDualChart height={223}/>
                </EPanel>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <EPanel
              title="Area Chart"
              headNode={<div className="h6 font-weight-bold text-center mb-3">Area Chart</div>}>
              <div className="row">
                <div className="col-12 col-lg-10">
                  <AreaTripleChart height={250}/>
                </div>
                <div className="col-12 col-lg-2">
                  <div className="h-100 d-flex flex-row flex-wrap justify-content-center flex-lg-column pt-3">
                    <div className="px-3 py-1 py-md-0 text-center">
                      <div className="h4 m-0">$1,200</div>
                      <div className="text-muted">
                        <small>Income</small>
                      </div>
                    </div>
                    <hr className="w-100 d-none d-lg-block"/>
                    <div className="px-3 py-1 py-md-0 text-center">
                      <div className="h4 m-0">$3,800</div>
                      <div className="text-muted">
                        <small>Outcome</small>
                      </div>
                    </div>
                    <hr className="w-100 d-none d-lg-block"/>
                    <div className="px-3 py-1 py-md-0 text-center">
                      <div className="h4 m-0">$5,000</div>
                      <div className="text-muted">
                        <small>Turnover</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </EPanel>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3 col-xl-3 mb-3">
            <LoginForm/>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
            <div className="card">
              <EDatepickerInline/>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5 col-xl-6 mb-3">
            <EPanel title="Form Controls" subtitle="Custom Plugins">
              <form className="mt-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text flex-column">
                            <div className="fa-fw position-relative" style={{ backgroundColor: 'inherit', flex: 1 }}>
                              <i className="fa fa-fw fa-calendar-o position-absolute" style={{ left: '-17%', top: 0 }}></i>
                              <i className="fa fa-fw fa-clock-o position-absolute" style={{ left: '17%', bottom: 0, backgroundColor: 'inherit' }}></i>
                            </div>
                          </span>
                        </span>
                        <EDatepickerDatetime/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text flex-column">
                            <div className="fa-fw position-relative" style={{ backgroundColor: 'inherit', flex: 1 }}>
                              <i className="fa fa-fw fa-calendar-o position-absolute" style={{ left: '-17%', top: 0 }}></i>
                              <i className="fa fa-fw fa-calendar position-absolute" style={{ left: '17%', bottom: 0, backgroundColor: 'inherit' }}></i>
                            </div>
                          </span>
                        </span>
                        <EDatepickerRange/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-fw fa-clock-o"></i>
                          </span>
                        </span>
                        <EDatepickerTime/>
                      </div>
                    </div>
                    <div className="form-group mb-md-0">
                      <EDatepickerAddons/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <ESelectSingle/>
                    </div>
                    <div className="form-group">
                      <ESelectMultiple/>
                    </div>
                    <div className="form-group mb-0">
                      <div className="pt-1 pb-2">
                        <div className="mb-1">
                          <ESliderSingle/>
                        </div>
                        <ESliderDouble/>
                      </div>
                      <div className="d-flex justify-content-center">
                        <EToggle
                          className="mr-1"
                          checked={true}/>
                        <EToggle
                          className="mr-1"
                          checked={false}/>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </EPanel>
          </div>
        </div>
      </div>
    );
  }
}

export default Components
