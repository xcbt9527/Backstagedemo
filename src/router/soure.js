/**
 * Created by momo on 2017/11/4.
 */
import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/components/index/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/menu',
      name: 'menu',
      component: menu
    }
  ]
})
