import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router