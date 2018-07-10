import Vue from 'vue'
import App from './App.vue'

import './App.scss'

import logo from './components/logo/index.vue'
Vue.component('c-logo', logo);

// 在移动浏览器中单击事件时，将会等待大约300ms的时间。浏览器是等着看，如果你是真正执行双击
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

import router from './router/index'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})