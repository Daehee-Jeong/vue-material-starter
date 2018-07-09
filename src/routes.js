import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './components/Main.vue'
import Login from './components/Login.vue'
import p404 from './components/p404.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/main', component: Main},
    { path: '*', component: p404 }
  ]
})

export default router
