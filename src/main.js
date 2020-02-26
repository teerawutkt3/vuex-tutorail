import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery.min'
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import 'datatables.net-bs4/js/dataTables.bootstrap4.min'
import 'font-awesome/css/font-awesome.css'
import {BootstrapVue} from 'bootstrap-vue'
import components from './component'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

//==> Buttons component
for (let i = 0; i < components.buttons.length; i++)
  Vue.component(components.buttons[i].name, components.buttons[i].component)

  //===> Card component
Vue.component(components.card.name, components.card.component)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
