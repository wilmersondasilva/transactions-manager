import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import filters from '@/filters'
import '@/assets/css/index.styl'

Vue.config.productionTip = false

filters(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
