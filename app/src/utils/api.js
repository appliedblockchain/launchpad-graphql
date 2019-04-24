import axios from 'axios'

const api = axios.create({
  baseURL: 'http://54.77.246.109:8000/api',
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