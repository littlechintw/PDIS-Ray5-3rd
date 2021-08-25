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
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/register/agree',
    name: 'RegisterAgree',
    component: () => import('../views/RegisterAgree.vue')
  },
  {
    path: '/register/done',
    name: 'RegisterDone',
    component: () => import('../views/RegisterDone.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
