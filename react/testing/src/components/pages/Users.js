import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Moment from 'moment'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import DefaultLayout from './layouts/Default'
import ETabs from '../../elements/components/tabs'
import EPanel from '../../elements/components/panel'
import UsersTable from './UsersTable'
import UsersFilter from './UsersFilter'
import Profile from './Profile'
import CreateUserForm from './ProfileSettingsForm'

class Users extends Component {
  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSelectAll = this.handleSelectAll.bind(this)
    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleTabClick = this.handleTabClick.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.editUser = this.editUser.bind(this)
    this.createUser = this.createUser.bind(this)
    this.state = {
      page: 1,
      perPage: 12,
      items: items.slice(),
      tab: 'all',
      filters: {
        name: '',
        status: null,
        date: []
      },
      modals: {
        edit: false,
        create: false
      },
      userToEdit: {}
    }
  }

  componentDidMount() {
    const parent = window.parent; // eslint-disable-line no-restricted-globals
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

  handlePageChange(page, perPage) {
    if (page !== this.state.page || perPage !== this.state.perPage) {
      this.setState({
        page,
        perPage
      })
    }
  }

  handleFilterChange(filter, value) {
    const filterName = String(filter)
    if (this.state.filters.hasOwnProperty(filterName) && value !== this.state.filters[filterName]) {
      this.setState({
        filters: Object.assign({}, this.state.filters, {
          [filterName]: value
        })
      })
    }
  }

  updateItem(id, updatedFields = {}) {
    const items = this.state.items.slice(),
          item = items.find((i) => i.id === id),
          index = items.indexOf(item)

    if (index > -1) {
      this.setState({
        items: [
          ...items.slice(0, index),
          Object.assign({}, item, updatedFields),
          ...items.slice(index + 1),
        ]
      })
    }
  }

  handleSelect(id, selected) {
    this.updateItem(id, { selected })
  }

  handleSelectAll(checked) {
    const items = this.state.items.slice()
    this.setState({
      items: items.map(item => Object.assign({}, item, { selected: checked }))
    })
  }

  handleStatusChange(id, status) {
    this.updateItem(id, { status })
  }

  handleTabClick(tab, e) {
    e.preventDefault()
    if (String(tab)) {
      this.setState({
        tab: String(tab)
      })
    }
  }

  toggleModal(modal, show) {
    if (this.state.modals.hasOwnProperty(modal)) {
      this.setState({
        modals: Object.assign({}, this.state.modals, { [modal]: show !== undefined ? show : !this.state.modals[modal] })
      })
    }
  }

  editUser(user) {
    this.setState({
      userToEdit: Object.assign({}, user, { username: user.name.split(' ').reverse().join('.').toLowerCase() })
    })
    this.toggleModal('edit', true)
  }

  createUser() {
    this.toggleModal('create', true)
  }

  render() {
    const tabs = function() {
      let all = this.state.items.slice()

      if (this.state.filters.name) {
        all = searchArray(all, this.state.filters.name, ['name'])
      }

      if (this.state.filters.status !== null) {
        all = all.filter(i => i.status === this.state.filters.status)
      }

      if (this.state.filters.date.length) {
        all = all.filter(i => {
          return i.date >= Moment(this.state.filters.date[0]).startOf('day').unix() &&
                 i.date <= Moment(this.state.filters.date[1]).endOf('day').unix()
        })
      }

      return {
        all,
        active: all.filter(i => i.status),
        selected: all.filter(i => i.selected)
      }
    }.bind(this)()

    return (
      <DefaultLayout>
        <ETabs className="mb-3 px-3">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink to="/pages/users" className="nav-link">Users</NavLink>
            </li>
          </ul>
        </ETabs>
        <div className="row flex-lg-nowrap">
          <div className="col mb-3">
            <EPanel title="Users" subtitle="Be a wise leader">
              <UsersTable
                items={tabs[this.state.tab]}
                selected={tabs['selected']}
                page={this.state.page}
                perPage={this.state.perPage}
                onSelect={this.handleSelect}
                onSelectAll={this.handleSelectAll}
                onStatusChange={this.handleStatusChange}
                onPageChange={this.handlePageChange}
                onClickEdit={this.editUser}/>
            </EPanel>
            <Modal isOpen={this.state.modals.edit} toggle={() => this.toggleModal('edit')} size="lg">
              <ModalHeader toggle={() => this.toggleModal('edit')}>Edit User</ModalHeader>
              <ModalBody>
                <div className="py-1">
                  <Profile user={this.state.userToEdit} />
                </div>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.modals.create} toggle={() => this.toggleModal('create')} size="lg">
              <ModalHeader toggle={() => this.toggleModal('create')}>Create User</ModalHeader>
              <ModalBody>
                <div className="py-1">
                  <CreateUserForm isNew={true}/>
                </div>
              </ModalBody>
            </Modal>
          </div>
          <div className="col-12 col-lg-3 mb-3">
            <UsersFilter
              items={this.state.items}
              filters={this.state.filters}
              tabs={tabs}
              tab={this.state.tab}
              onTabClick={this.handleTabClick}
              onFilterChange={this.handleFilterChange}
              onClickCreate={this.createUser}/>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

const items = [
  { id: 1,  name: 'Adam Cotter',        date: 1512792908, status: true,  photo: '' },
  { id: 2,  name: 'Pauline Noble',      date: 1516977768, status: false, photo: '' },
  { id: 3,  name: 'Sherilyn Metzel',    date: 1517042476, status: true,  photo: '' },
  { id: 4,  name: 'Terrie Boaler',      date: 1516439865, status: true,  photo: '' },
  { id: 5,  name: 'Rutter Pude',        date: 1515850922, status: false, photo: '' },
  { id: 6,  name: 'Clifford Benjamin',  date: 1516898701, status: true,  photo: '' },
  { id: 7,  name: 'Thedric Romans',     date: 1515707885, status: false, photo: '' },
  { id: 8,  name: 'Haily Carthew',      date: 1517056707, status: true,  photo: '' },
  { id: 9,  name: 'Dorothea Joicey',    date: 1513090469, status: true,  photo: '' },
  { id: 10, name: 'Mikaela Pinel',      date: 1512892304, status: false, photo: '' },
  { id: 11, name: 'Donnell Farries',    date: 1512299369, status: true,  photo: '' },
  { id: 12, name: 'Letizia Puncher',    date: 1512769349, status: false, photo: '' },
  { id: 13, name: 'Kania Yallowley',    date: 1515521487, status: true,  photo: '' },
  { id: 14, name: 'Clay De Francesco',  date: 1515012234, status: false, photo: '' },
  { id: 15, name: 'Ina Queree',         date: 1514458367, status: false, photo: '' },
  { id: 16, name: 'Rasia Awty',         date: 1516943842, status: false, photo: '' },
  { id: 17, name: 'Basil Crosham',      date: 1512108299, status: true,  photo: '' },
  { id: 18, name: 'Alexis Dodworth',    date: 1516814115, status: false, photo: '' },
  { id: 19, name: 'Greg Onyon',         date: 1517071308, status: true,  photo: '' },
  { id: 20, name: 'Barry Carbett',      date: 1515450742, status: true,  photo: '' },
  { id: 21, name: 'Carlyle Adran',      date: 1512498261, status: true,  photo: '' },
  { id: 22, name: 'Guillaume Petel',    date: 1512742913, status: false, photo: '' },
  { id: 23, name: 'Wendeline Glasner',  date: 1513319267, status: false, photo: '' },
  { id: 24, name: 'Sylvia Petrollo',    date: 1516080489, status: false, photo: '' },
  { id: 25, name: 'Meade Quoit',        date: 1513972299, status: true,  photo: '' },
  { id: 26, name: 'Eugine Planke',      date: 1515488407, status: false, photo: '' },
  { id: 27, name: 'Thoma Drakeley',     date: 1515023660, status: false, photo: '' },
  { id: 28, name: 'Web Margetson',      date: 1513557231, status: true,  photo: '' },
  { id: 29, name: 'Erskine Stivens',    date: 1515233788, status: true,  photo: '' },
  { id: 30, name: 'Jedidiah Emmer',     date: 1512614842, status: false, photo: '' },
  { id: 31, name: 'Wolfie Drakers',     date: 1512381522, status: false, photo: '' },
  { id: 32, name: 'Allie Quiney',       date: 1515488202, status: true,  photo: '' }
]

function searchArray(array, query, fields = []) {
  if (!array.length || !String(query)) {
    return array
  }
  return array.filter(item => {
    let found = false;
    for (let key in item) {
      if (fields.length && fields.indexOf(key) < 0) {
        continue
      }
      if (typeof item[key] === 'string' &&
          item[key].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        found = true;
      }
    }
    return found;
  })
}

export default Users
