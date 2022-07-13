import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials)
    console.log(response.data)
    window.localStorage.setItem('AUTH', JSON.stringify(response.data))
    window.dispatchEvent(new Event('storage'))
  } catch (error) {
    console.error(error)
  }
}

export {
  login
}
