import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine.vue')
  },
  {
    path: '/cre',
    name: 'Cre',
    component: () => import('../views/cre.vue')
  },
  {
    path: '/xq/:num',
    name: 'Xq',
    component: () => import('../views/xq.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
