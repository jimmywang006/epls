import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  VueAxios, 
  axios,
  VueLoading,
  render: h => h(App)
}).$mount('#app')
