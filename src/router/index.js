import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewMatch from '../views/NewMatch.vue'
import Matches from '../views/Matches.vue'
import Players from '../views/Players.vue'
import NewThrow from '../views/NewThrow.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/matches',
    name: 'Matches',
    component: Matches
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
  },
  {
    path: '/newmatch',
    name: 'NewMatch',
    component: NewMatch
  },
  {
    path: '/newThrow',
    name: 'NewThrow',
    component: NewThrow
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
