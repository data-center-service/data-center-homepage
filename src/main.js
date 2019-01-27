import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Table, TableColumn, Button } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)

Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
