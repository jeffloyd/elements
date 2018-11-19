import Vue from 'vue';
import Router from 'vue-router';

const Components = () => import('../vue/Components.vue')
const Bootstrap = () => import('../vue/Bootstrap.vue')
const Pages = () => import('../vue/Pages.vue')

Vue.use(Router);

export default new Router({
  //mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/pages' },
    { path: '/pages', component: Pages,
      children: [
        { path: '', redirect: 'overview' },
        { path: 'overview', component: () => import('../vue/pages/Overview.vue') },
        { path: 'users', component: () => import('../vue/pages/Users.vue') },
        { path: 'settings', component: () => import('../vue/pages/Settings.vue') },
      ]
    },
    { path: '/elements', component: Components },
    { path: '/bootstrap', component: Bootstrap },
  ]
})
