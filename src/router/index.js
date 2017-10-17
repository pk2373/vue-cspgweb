import Vue from 'vue'
import Router from 'vue-router'

import List from '@/views/List'
import List2 from '@/views/List2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: List
    },
    {
      path: '/List',
      component: List
    },
    {
      path: '/List2',
      component: List2
    }
  ]
})

/*Router.beforeEach((to,from,next) => {
  if(to.matched.some( m => m.meta.auth)){
    // 对路由进行验证
    if(store.getters.authorizd) { // 已经登陆
      next()
    }else{
      // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
      next({path:'/login',query:{ referrer: to.fullPath} })
    }
  }else{
    next()
  }
})*/
