import 'core-js/shim'
import Vue from 'vue'
import Router from './router'
import App from '../vue/App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueMoment from 'vue-moment'

Vue.use(BootstrapVue)
Vue.use(VueMoment)

const app = new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#root')
