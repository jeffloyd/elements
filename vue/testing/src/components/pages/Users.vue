<template>
  <layout-default>
    <e-tabs class="mb-3 px-3">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link to="users" class="nav-link">Users</router-link>
        </li>
      </ul>
    </e-tabs>
    <div class="row flex-lg-nowrap">
      <div class="col mb-3">
        <e-panel title="Users" subtitle="Be a wise leader">
          <template slot="actions">
            <small>{{ tableStatus }}</small>
          </template>
          <b-table class="table-lg fa-sort-icons table-rounded mt-3 mb-0"
            :items="display"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            :sort-desc="true"
            sort-by="date"
            show-empty
            responsive
            bordered>
            <template slot="HEAD_check" slot-scope="data">
              <div @click.stop class="custom-control custom-control-inline custom-control-nameless custom-checkbox m-0 align-top">
                <input type="checkbox" class="custom-control-input" v-model="selectedAll" :id="'users-'+data.key">
                <label class="custom-control-label" :for="'users-'+data.key"></label>
              </div>
            </template>
            <template slot="HEAD_status" slot-scope="data">
              <i class="fa fa-fw fa-question-circle"></i>
            </template>
            <template slot="check" slot-scope="data">
              <div class="custom-control custom-control-inline custom-control-nameless custom-checkbox m-0 align-top">
                <input type="checkbox" class="custom-control-input" @click.stop :value="data.item" v-model="selectedItems" :id="'users-'+data.index">
                <label class="custom-control-label" :for="'users-'+data.index"></label>
              </div>
            </template>
            <template slot="photo" slot-scope="data">
              <div class="bg-light justify-content-center align-items-center" style="width: 35px; height: 35px; border-radius: 3px; display: inline-flex; vertical-align: top;">
                <i class="fa fa-fw fa-photo" style="opacity: .8"></i>
              </div>
            </template>
            <template slot="date" slot-scope="data">
              <span>{{ data.item.date | moment('DD MMM YYYY') }}</span>
            </template>
            <template slot="status" slot-scope="data">
              <i class="fa fa-fw text-secondary cursor-pointer"
                :class="data.value ? 'fa-toggle-on' : 'fa-toggle-off'"
                @click.stop="data.item.status = !data.item.status"></i>
            </template>
            <template slot="action" slot-scope="data">
              <div class="btn-group align-top">
                <button
                  class="btn btn-sm btn-outline-secondary badge"
                  type="button"
                  @click="editUser(data.item)">Edit</button>
                <button
                  class="btn btn-sm btn-outline-secondary badge"
                  type="button"
                  @click="deleteUser(data.item)">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </template>
          </b-table>
          <b-pagination v-if="display.length > perPage" class="pagination-separated m-0 mt-3" size="sm" align="center" :total-rows="display.length" :per-page="perPage" v-model="currentPage" />
        </e-panel>
        <b-modal ref="editUserModal" size="lg" title="User Preview" hide-footer lazy>
          <e-profile
            class="py-1"
            :user="userToShow"></e-profile>
        </b-modal>
        <b-modal ref="newUserModal" size="lg" title="New User" hide-footer lazy>
          <profile-settings-form class="pb-1" is-new></profile-settings-form>
        </b-modal>
      </div>
      <div class="col-12 col-lg-3 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="text-center px-xl-3">
              <button class="btn btn-success btn-block" type="button" @click="newUser">New User</button>
            </div>
            <hr class="my-3">
            <e-navlist active-bold>
              <ul class="nav">
                <li class="nav-item" :class="{ active: tab == 'all' }">
                  <a href="" class="nav-link px-3" @click.prevent="tab = 'all'">
                    <span>All</span>
                    <small>/ {{ all.length }}</small>
                  </a>
                </li>
                <li class="nav-item" :class="{ active: tab == 'active' }">
                  <a href="" class="nav-link px-3" @click.prevent="tab = 'active'">
                    <span>Active</span>
                    <small>/ {{ active.length }}</small>
                  </a>
                </li>
                <li class="nav-item" :class="{ active: tab == 'selected' }">
                  <a href="" class="nav-link px-3" @click.prevent="tab = 'selected'">
                    <span>Selected</span>
                    <small>/ {{ selected.length }}</small>
                  </a>
                </li>
              </ul>
            </e-navlist>
            <hr class="my-3">
            <div class="">
              <div class="form-group">
                <label>Date from - to:</label>
                <div class="">
                  <e-datepicker-range
                    :value.sync="filters.date"
                    :placeholder="datesInputPlaceholder"></e-datepicker-range>
                </div>
              </div>
              <div class="form-group">
                <label>Search by Name:</label>
                <div>
                  <input class="form-control w-100" type="text" v-model="filters.name" placeholder="Name">
                </div>
              </div>
            </div>
            <hr class="my-3">
            <div class="">
              <label>Status:</label>
              <div class="px-2">
                <div class="custom-control custom-radio">
                  <input type="radio" class="custom-control-input" name="user-status" :value="false" v-model="filters.status" id="users-status-disabled">
                  <label class="custom-control-label" for="users-status-disabled">Disabled</label>
                </div>
              </div>
              <div class="px-2">
                <div class="custom-control custom-radio">
                  <input type="radio" class="custom-control-input" name="user-status" :value="true" v-model="filters.status" id="users-status-active">
                  <label class="custom-control-label" for="users-status-active">Active</label>
                </div>
              </div>
              <div class="px-2">
                <div class="custom-control custom-radio">
                  <input type="radio" class="custom-control-input" name="user-status" :value="null" v-model="filters.status" id="users-status-any">
                  <label class="custom-control-label" for="users-status-any">Any</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
  import LayoutDefault from './layouts/default'
  import EProfile from './Profile'
  import ProfileSettingsForm from './ProfileSettingsForm'

  import ETabs from 'elements/tabs'
  import ENavlist from 'elements/navlist'
  import EPanel from 'elements/panel'
  import EDatepickerRange from 'elements/datepicker/types/range'

  import Moment from 'moment'

  const items = [
    { name: 'Adam Cotter',        date: 1512792908, status: true, photo: '' },
    { name: 'Pauline Noble',      date: 1516977768, status: false, photo: '' },
    { name: 'Sherilyn Metzel',    date: 1517042476, status: true, photo: '' },
    { name: 'Terrie Boaler',      date: 1516439865, status: true, photo: '' },
    { name: 'Rutter Pude',        date: 1515850922, status: false, photo: '' },
    { name: 'Clifford Benjamin',  date: 1516898701, status: true, photo: '' },
    { name: 'Thedric Romans',     date: 1515707885, status: false, photo: '' },
    { name: 'Haily Carthew',      date: 1517056707, status: true, photo: '' },
    { name: 'Dorothea Joicey',    date: 1513090469, status: true, photo: '' },
    { name: 'Mikaela Pinel',      date: 1512892304, status: false, photo: '' },
    { name: 'Donnell Farries',    date: 1512299369, status: true, photo: '' },
    { name: 'Letizia Puncher',    date: 1512769349, status: false, photo: '' },
    { name: 'Kania Yallowley',    date: 1515521487, status: true, photo: '' },
    { name: 'Clay De Francesco',  date: 1515012234, status: false, photo: '' },
    { name: 'Ina Queree',         date: 1514458367, status: false, photo: '' },
    { name: 'Rasia Awty',         date: 1516943842, status: false, photo: '' },
    { name: 'Basil Crosham',      date: 1512108299, status: true, photo: '' },
    { name: 'Alexis Dodworth',    date: 1516814115, status: false, photo: '' },
    { name: 'Greg Onyon',         date: 1517071308, status: true, photo: '' },
    { name: 'Barry Carbett',      date: 1515450742, status: true, photo: '' },
    { name: 'Carlyle Adran',      date: 1512498261, status: true, photo: '' },
    { name: 'Guillaume Petel',    date: 1512742913, status: false, photo: '' },
    { name: 'Wendeline Glasner',  date: 1513319267, status: false, photo: '' },
    { name: 'Sylvia Petrollo',    date: 1516080489, status: false, photo: '' },
    { name: 'Meade Quoit',        date: 1513972299, status: true, photo: '' },
    { name: 'Eugine Planke',      date: 1515488407, status: false, photo: '' },
    { name: 'Thoma Drakeley',     date: 1515023660, status: false, photo: '' },
    { name: 'Web Margetson',      date: 1513557231, status: true, photo: '' },
    { name: 'Erskine Stivens',    date: 1515233788, status: true, photo: '' },
    { name: 'Jedidiah Emmer',     date: 1512614842, status: false, photo: '' },
    { name: 'Wolfie Drakers',     date: 1512381522, status: false, photo: '' },
    { name: 'Allie Quiney',       date: 1515488202, status: true, photo: '' }
  ]

  const fields = [
    { key: 'check', tdClass: 'text-center align-middle' },
    { key: 'photo', label: 'Photo', thClass: 'text-center', tdClass: 'align-middle text-center' },
    { key: 'name', sortable: true, thClass: 'max-width', tdClass: 'align-middle text-nowrap' },
    { key: 'date', sortable: true, tdClass: 'align-middle text-nowrap' },
    { key: 'status', tdClass: 'text-center align-middle' },
    { key: 'action', tdClass: 'text-center align-middle' },
  ]

  // filters the given array of objects with a provided text and fields
  const searchArray = function(array, query, fields = []) {
    if (!array.length || !String(query)) {
      return array
    }

    return array.filter(item => {
      let found = false;
      for (let key in item) {
        if (fields.length && fields.indexOf(key) < 0) {
          continue
        }
        if (typeof item[key] == 'string' &&
            item[key].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
          found = true;
        }
      }
      return found;
    })
  }

  export default {
    components: {
      LayoutDefault,
      ETabs, ENavlist,
      EProfile, ProfileSettingsForm,
      EDatepickerRange,
      EPanel
    },
    data: function() {
      return {
        items,
        fields,
        currentPage: 1,
        perPage: 12,
        tab: 'all',
        filters: {
          name: '',
          status: null,
          date: []
        },
        selectedItems: [],
        userToShow: {}
      }
    },
    mounted: function() {
      const parent = window.parent;
      if (parent.setDemoFrameHeight) {
        parent.setDemoFrameHeight();
      }
      this.selectedItems = [
         this.items[1],
         this.items[2]
      ]
    },
    computed: {
      all: function() {
        let items = this.items;

        if (this.filters.name) {
          items = searchArray(this.items, this.filters.name, ['name'])
        }

        if (this.filters.status != null) {
          items = items.filter(i => i.status == this.filters.status)
        }

        if (this.filters.date.length) {
          items = items.filter(i => {
            return i.date >= Moment(this.filters.date[0]).startOf('day').unix() &&
                   i.date <= Moment(this.filters.date[1]).endOf('day').unix()
          })
        }

        return items
      },
      active: function() {
        return this.all.filter(i => i.status)
      },
      selected: function() {
        return this.all.filter(i => this.selectedItems.indexOf(i) > -1)
      },
      selectedAll: {
        get: function() {
          return this.display.every(i => this.selected.indexOf(i) > -1)
        },
        set: function(value) {
          if (value) {
            this.selectedItems = [...this.display]
          } else {
            this.selectedItems = this.selectedItems.filter(i => this.display.indexOf(i) < 0)
          }
        }
      },
      display: function() {
        return this[this.tab] || []
      },
      tableStatus: function() {
        let itemsTotal = this.items.length,
            itemsFrom = (this.perPage * (this.currentPage - 1)) + 1,
            itemsTo = Math.min(itemsFrom + this.perPage - 1, itemsTotal);
        return `${itemsFrom} - ${itemsTo} of ${itemsTotal}`;
      },
      datesInputPlaceholder: function() {
        let range = this.getMinMaxDates(),
            placeholder = '';
        if (range.every(date => Moment(date).isValid())) {
          placeholder = `${Moment(range[0]).format('DD MMM YY')} - ${Moment(range[1]).format('DD MMM YY')}`
        }
        return placeholder
      }
    },
    methods: {
      getMinMaxDates: function() {
        let min = Number.POSITIVE_INFINITY,
            max = 0;
        this.items.map(item => {
          if (item.date < min) {
            min = item.date
          }
          if (item.date > max) {
            max = item.date
          }
        })
        return [Moment.unix(min).toDate(), Moment.unix(max).toDate()];
      },
      clearSearch: function() {
        this.filters.search = ''
      },
      editUser: function(user) {
        this.userToShow = Object.assign({}, user, {
          username: user.name
            .split(' ').reverse()
            .map((str, i) => i > 0 ? str.charAt(0) : str)
            .join('.')
            .toLowerCase()
        });
        this.$refs.editUserModal.show()
      },
      newUser: function() {
        this.$refs.newUserModal.show()
      },
      deleteUser: function(user) {
        let index = this.items.indexOf(user)
        if (index > -1) {
          this.items.splice(index, 1)
        }
      }
    }
  }
</script>

<style lang="scss"></style>
