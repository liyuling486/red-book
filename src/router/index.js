import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/layout/bottomIndex'),
    redirect: '/home/find',
    children: [
      {
        path: 'home',
        name: 'home',
        redirect: '/home/find',
        component: () => import('../views/home'),
        children: [
          {
            path: 'follow',
            name: 'home.follow',
            component: () => import('../views/home/follow')
          },
          {
            path: 'find',
            name: 'home.find',
            component: () => import('../views/home/find')
          },
          {
            path: 'city',
            name: 'home.city',
            component: () => import('../views/home/city')
          }
        ]
      },
      {
        path: 'msg',
        name: 'msg',
        component: () => import('../views/msg'),
      },
      {
        path: 'shop',
        name: 'shop',
        component: () => import('../views/shop'),
      },
    ]
  },
  {
    path: '/exception',
    name: 'exception',
    component: () => import('../views/exception/PCTerminal'),
    children: [
      {
        path: 'pc',
        name: 'exception.pc',
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

/**
 * 判断路由重复跳转
 */
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router