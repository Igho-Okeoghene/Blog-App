import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.oluwasetemi.dev',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getPosts = async ({ page = '1', limit = '20' } = {}) => {
  const response = await api.get('/posts', { params: { page, limit } })
  return response.data.data
}

export const getPostById = async (id) => {
  const response = await api.get(`/posts/${id}`)
  return response.data
}
