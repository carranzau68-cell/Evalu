import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('../views/DashboardView.vue')
  }

]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
