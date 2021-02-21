import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './assets/css/global.css'

import axios from 'axios'
Vue.prototype.$http = axios
//配置请求的根路径
// axios.defaults.baseUrl = http://114.55.98.156:8083/command/;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
