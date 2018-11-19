import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'

import './table.css'

const defaultPagination = {
  hideSizePerPage: true,
  alwaysShowAllBtns: true,
  firstPageText: '«',
  prePageText: '‹',
  nextPageText: '›',
  lastPageText: '»',
  sizePerPage: 5
}

const propTypes = {
  perPage: PropTypes.number
}

const defaultProps = {
  noDataIndication: () => (
    <span>There are no records to show</span>
  ),
  perPage: 5
}

class ETable extends Component {
  render() {
    const { pagination, className, ...restProps } = this.props
    const paginationOptions = Object.assign({},
            defaultPagination,
            pagination
          )

    return (
      <div className={classNames('table-responsive', className)}>
        <BootstrapTable
          pagination={paginationFactory(paginationOptions)}
          {...restProps} />
      </div>
    )
  }
}

ETable.propTypes = propTypes
ETable.defaultProps = defaultProps

export default ETable
