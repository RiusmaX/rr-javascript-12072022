const jwt = require('jsonwebtoken')

// Intercepteur de validation d'authentification JWT
const withAuth = async (req, res, next) => {
  if (req.headers.authorization) {
    // Récupération du token dans le header Authorization
    const token = req.headers.authorization.split(' ')[1]
    if (!token) return res.sendStatus(403)

    try {
      // Vérification du token
      const decoded = await jwt.verify(token, process.env.JWT_SECRET)
      if (!decoded) return res.sendStatus(403)
      // Si OK, suite de l'exécution
      next()
    } catch (e) {
      return res.sendStatus(403)
    }
  } else {
    return res.sendStatus(403)
  }
}

module.exports = withAuth
