import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 1000
})

export default {
  login: async (email, password) => {
    const { data: token } = await api.post('/login', {
      email, password
    })

    return token
  },
  authenticate: async token => {
    try {
      const { data } = await api.post('/auth', {
        token
      })
  
      return data
    } catch (error) {
      console.log('ERROR', error)
      return false
    }
  }
}