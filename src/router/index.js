import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/datashow'
    },
    {
      path: '/datashow',
      name: 'Datashow',
      component: () => import('@/views/datashow')
    },
    {
      path: '/datalist',
      name: 'Datalist',
      component: () => import('@/views/datalist')
    }
  ]
})
