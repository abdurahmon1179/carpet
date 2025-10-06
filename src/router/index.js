import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/index.vue'
import Dashboard from '../views/dashboard.vue'
import Cart from '../views/cart.vue' 

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
  },
  {
    path: '/cart', 
    component: Cart,
    meta: { layout: 'CustomLayout' } 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
