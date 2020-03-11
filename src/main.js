import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { timestamp, get } from './api/axios'
import bus from './bus'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.timestamp = timestamp,
Vue.prototype.$bus = bus
Vue.prototype.GET = get 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
