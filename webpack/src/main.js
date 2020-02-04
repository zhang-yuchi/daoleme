import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import meta from './vue-meta'
import "lib-flexible"
import mycomponent from './utils/install.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/normalize.css'
import './assets/css/app.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(mycomponent)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
