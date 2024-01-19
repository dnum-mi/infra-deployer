import api from '@/api/index.js'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const login = async ({ username, password }: { username: 'string'; password: 'string' }) => {
    const res = await api.login({ username, password })
    localStorage.setItem('token', res.token)
  }

  return {
    login,
  }
})
