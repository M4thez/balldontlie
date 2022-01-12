import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import PlayerDetails from '../views/PlayerDetails.vue'
import NotFound404 from '../views/NotFound404.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/player/:id',
    name: 'PlayerDetails',
    component: PlayerDetails,
    props: true
  },
  // Handling Error 404 - page not found
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
