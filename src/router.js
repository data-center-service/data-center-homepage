import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Api from './views/Api.vue'
import Example from './views/Example.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/apis'
    },
    {
      path: '/apis',
      name: 'api',
      component: Api
    },
    {
      path: '/examples',
      name: 'example',
      component: Example
    }
  ]
})
