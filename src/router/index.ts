import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/AppHome.vue'
import LoginForm from '@/views/LoginForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env?.BASE_URL || ''),
  routes,
})

export default router
