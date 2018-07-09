import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import router from './routes'
import VueRouter from 'vue-router'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
