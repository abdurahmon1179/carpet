import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/index.vue'
import Dashboard from '../views/dashboard.vue'
import Cart from '../views/cart.vue'
import Signin from '../components/auth/signin.vue'
import SignUp from '../components/auth/signup.vue'

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
  },
  {
    path: '/signin',
    component: Signin,
    meta: { layout: 'signin' } 
  },
  {
    path: '/signup',              
    component: SignUp,
    meta: { layout: 'signin' }    
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
