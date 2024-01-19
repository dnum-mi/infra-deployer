import axios from 'axios'

export const apiClient = axios.create({
  baseURL: '/api/v1',
  timeout: 5000,
})

apiClient.interceptors.request.use(
  async function addAuthHeader (req) {
    if (req.url === '/auth' || req.url?.startsWith('/version')) {
      return req
    }

    const token = localStorage.getItem('token')
    if (token) {
      Object.assign(req.headers, {
        Authorization: `Bearer ${token}`,
      })
    }

    return req
  },
  function (error) {
    if (error instanceof Error) {
      return Promise.reject(error)
    }
  },
)

apiClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error instanceof Error) {
      return Promise.reject(error)
    }
  },
)
