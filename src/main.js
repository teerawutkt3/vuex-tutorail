import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery.min'
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import 'datatables.net-bs4/js/dataTables.bootstrap4.min'
import 'font-awesome/css/font-awesome.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
