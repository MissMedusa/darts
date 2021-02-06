import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Matches from '../views/Matches.vue'
import Players from '../views/Players.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/matches',
    name: 'Matches',
    component: () => import(/* webpackChunkName: "matches" */ '../views/Matches.vue')
  },
  {
    path: '/players',
    name: 'Players',
    component: () => import(/* webpackChunkName: "players" */ '../views/Players.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
