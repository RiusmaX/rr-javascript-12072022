const jwt = require('jsonwebtoken')

const generateToken = async (payload) => {
  const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' })
  return token
}

module.exports = {
  generateToken
}
