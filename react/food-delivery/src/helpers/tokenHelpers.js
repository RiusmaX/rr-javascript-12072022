import jwt_decode from 'jwt-decode'

const checkAuth = () => {
  let authStatus = false
  const auth = JSON.parse(window.localStorage.getItem('AUTH'))
  if (auth && auth.user && auth.token) {
    const decoded = jwt_decode(auth.token)
    const now = new Date().getTime() / 1000
    if (decoded.exp > now) {
      authStatus = true
    }
  }
  return authStatus
}

export {
  checkAuth
}
