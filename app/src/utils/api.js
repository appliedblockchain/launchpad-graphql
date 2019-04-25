import axios from 'axios'

const AUTH_SERVER_HOST = process.env.REACT_APP_AUTH_SERVER_HOST
const AUTH_SERVER_PORT = process.env.REACT_APP_AUTH_SERVER_PORT

const api = axios.create({
  baseURL: `http://${AUTH_SERVER_HOST}:${AUTH_SERVER_PORT}/api`,
  timeout: 1000
})

export default {
  login: async (email, password) => {
    try {
      const { data: token } = await api.post('/login', {
        email, password
      })
  
      return token
    } catch (error) {
      console.error(error)
    }
  },
  authenticate: async token => {
    try {
      const { data } = await api.post('/auth', {
        token
      })
  
      return data
    } catch (error) {
      return false
    }
  }
}