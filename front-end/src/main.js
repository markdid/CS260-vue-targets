import Vue from 'vue'
import App from './App.vue'
import router from './router'

import targetsdata from './targets-data.js'
import plandata from './plan-data.js'

Vue.config.productionTip = false

let data = {
  targets: targetsdata,
  plans: plandata,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
