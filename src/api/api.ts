import { apiClient } from './xhr-client.js'

// User
export const login = async (data: { username: 'string'; password: 'string' }) => {
  const response = await apiClient.post('/auth/login', data)
  return response.data
}
