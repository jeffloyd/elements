import React, { Component } from 'react'
import DefaultLayout from './layouts/Default'
import EPanel from '../../elements/components/panel'
import EMetric from '../../elements/components/metric'
import AreaChart from './charts/AreaChart'
import BarHorizontalChart from './charts/BarHorizontalChart'
import AreaSharpChart from './charts/AreaSharpChart'
import DonutChart from './charts/DonutChart'
import BasicTable from '../../elements/components/table/examples/BasicTable'

class Overview extends Component {
  componentDidMount() {
    const parent = window.parent; // eslint-disable-line no-restricted-globals
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

  render() {
    return (
      <DefaultLayout>
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-9 col-xl-10 mb-3">
            <EPanel title="Deployments Over Time" subtitle="">
              <AreaChart className="mt-3" height={190}/>
            </EPanel>
          </div>
          <div className="col-12 col-lg-3 col-xl-2">
            <div className="row">
              <div className="col col-lg-12">
                <EMetric className="mb-3" title="Users" value="3,200" icon="fa-user"/>
              </div>
              <div className="col col-lg-12">
                <EMetric className="mb-3" title="Tickets" value="1,300" icon="fa-tag"/>
              </div>
              <div className="col col-lg-12">
                <EMetric className="mb-3" title="Cost" value="8,400" icon="fa-usd"/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-6 col-xl-4 mb-3">
            <EPanel title="Dev vs. Prod Deployments" subtitle="">
              <BarHorizontalChart className="mt-3" height={200}/>
            </EPanel>
          </div>
          <div className="col col-sm-6 col-xl-4 mb-3">
            <EPanel title="Costing" subtitle="">
              <AreaSharpChart className="mt-3" height={200}/>
            </EPanel>
          </div>
          <div className="col col-sm-12 col-xl-4 mb-3">
            <EPanel title="Resource Usage" subtitle="">
              <DonutChart className="mt-3" height={200}/>
            </EPanel>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <BasicTable/>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default Overview
