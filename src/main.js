import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill'
import promise from 'es6-promise'

Vue.use(ElementUI);
Vue.use(BootstrapVue)
Vue.config.productionTip = false
promise.polyfill()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
