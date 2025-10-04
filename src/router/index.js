import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/index.vue'
import Dashboard from "../views/dashboard.vue"

const routes = [
  {
    path: '/',
    component: Home,
    meta: { layout: 'CustomLayout' }
  },
  {
    path: '/admin',
    component: Dashboard,
    meta: { layout: 'AdminLayout' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
