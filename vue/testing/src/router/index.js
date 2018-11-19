import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/pages/overview' },
    { path: '/pages/overview', component: () => import('@/components/pages/Overview') },
    { path: '/pages/users', component: () => import('@/components/pages/Users') },
    { path: '/pages/settings', component: () => import('@/components/pages/Settings') },
  ]
})
