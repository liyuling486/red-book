import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home'),
    children: [
      {
        path: 'follow',
        component: () => import('../views/home/follow')
      },
      {
        path: 'find',
        component: () => import('../views/home/find')
      },
      {
        path: 'city',
        component: () => import('../views/home/city')
      }
    ]
  },
  {
    path: '/msg',
    component: () => import('../views/msg'),
  },
  {
    path: '/shop',
    component: () => import('../views/shop'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router