import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './utils/register-vant' // 加载vant执行注册模块
import 'amfe-flexible' // REM基准值

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
