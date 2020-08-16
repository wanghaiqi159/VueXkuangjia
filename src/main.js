import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { timestamp, get , post , setCookie , getCookie , delCookie , imgBase , imgCompress,} from './api/axios'
import bus from './bus'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.timestamp = timestamp,
Vue.prototype.$bus = bus,
Vue.prototype.GET = get,
Vue.prototype.POST = post,
Vue.prototype.setCookie = setCookie,     //  设置cookie
Vue.prototype.getCookie = getCookie,     //  读取cookie
Vue.prototype.delCookie = delCookie,     //  删除cookie
Vue.prototype.imgBase = imgBase,         //  图片转换base64
Vue.prototype.imgCompress = imgCompress, //  图片压缩以后转换base64


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
