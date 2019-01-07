// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import './icons'

import Bridge from './utils/WebViewJavascriptBridge_JS'
Vue.prototype.$bridge = Bridge

/* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
