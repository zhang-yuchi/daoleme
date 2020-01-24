import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import meta from './vue-meta'
import "lib-flexible"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
