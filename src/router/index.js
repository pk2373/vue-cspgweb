import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import List from '@/views/List'
import List2 from '@/views/List2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Index/:id',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/Index/',
          component: List
        },
        {
          path: '/Index/List',
          component: List
        },
        {
          path: '/Index/List2',
          component: List2
        }
      ]
    }
  ]
})
