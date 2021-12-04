import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Plan from '../views/Plan.vue'
import Targets from '../views/Targets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/plan',
    name: 'Plan',
    component: Plan
  },
  {
    path: '/targets',
    name: 'Targets',
    component: Targets
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
