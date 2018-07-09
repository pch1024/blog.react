import Vue from 'vue'
import App from './App.vue'

import './App.scss'

import logo from './components/logo/index.vue'
Vue.component('c-logo', logo);



import router from './router/index'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})