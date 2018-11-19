import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ETable from '../../elements/components/table'
import Moment from 'moment'

const propTypes = {
  items: PropTypes.array,
  selected: PropTypes.array,
  page: PropTypes.number,
  perPage: PropTypes.number,
  onPageChange: PropTypes.func,
  onClickEdit: PropTypes.func
}
const defaultProps = {
  items: [],
  selected: [],
  page: 1,
  perPage: 12
}

class UsersTable extends Component {
  render() {
    const columns = [
      {
        dataField: 'selected',
        text: '',
        headerClasses: 'align-top',
        classes: 'align-middle',
        headerFormatter: (column, index) => (
          <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
            <input
              type="checkbox"
              className="custom-control-input"
              id="all-items"
              checked={this.props.items.length === this.props.selected.length }
              onChange={(e) => this.props.onSelectAll(e.target.checked)} />
            <label className="custom-control-label" htmlFor="all-items"></label>
          </div>
        ),
        formatter: (selected, row, index) => (
          <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
            <input
              type="checkbox"
              className="custom-control-input"
              id={'item-' + row.id}
              checked={selected ? true : false}
              onChange={(e) => this.props.onSelect(row.id, e.target.checked)} />
            <label className="custom-control-label" htmlFor={'item-' + row.id}></label>
          </div>
        )
      },
      {
        dataField: 'photo',
        text: 'Photo',
        classes: 'align-middle text-center',
        formatter: (cell, row, index) => (
          <div
            className="bg-light d-inline-flex justify-content-center align-items-center align-top"
            style={{ width: '35px', height: '35px', borderRadius: '3px' }}>
            <i className="fa fa-fw fa-photo" style={{ opacity: '0.8' }}></i>
          </div>
        )
      },
      {
        dataField: 'name',
        text: 'Name',
        headerClasses: 'max-width',
        classes: 'text-nowrap align-middle'
      },
      {
        dataField: 'date',
        text: 'Date',
        classes: 'text-nowrap align-middle',
        sort: true,
        formatter: (cell, row, index) => (
          <span>{ Moment.unix(cell).format('DD MMM YYYY') }</span>
        )
      },
      {
        dataField: 'status',
        text: ' ',
        classes: 'text-center align-middle',
        formatter: (cell, row, index) => (
          <i
            className={classNames(
              'fa fa-fw text-secondary cursor-pointer',
              cell ? 'fa-toggle-on' : 'fa-toggle-off'
            )}
            onClick={() => this.props.onStatusChange(row.id, !cell)}/>
        )
      },
      {
        dataField: '',
        text: 'Actions',
        classes: 'text-center align-middle',
        formatter: (cell, row, index) => (
          <div className="btn-group align-top">
            <button
              className="btn btn-sm btn-outline-secondary badge"
              type="button"
              onClick={() => this.props.onClickEdit(row)}>Edit</button>
            <button
              className="btn btn-sm btn-outline-secondary badge"
              type="button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        )
      }
    ]
    return (
      <ETable
        className="table-lg mt-3"
        keyField='id'
        data={ this.props.items }
        columns={ columns }
        pagination={{
          page: this.props.page,
          sizePerPage: this.props.perPage,
          onPageChange: this.props.onPageChange
        }} />
    )
  }
}

UsersTable.propTypes = propTypes
UsersTable.defaultProps = defaultProps

export default UsersTable
