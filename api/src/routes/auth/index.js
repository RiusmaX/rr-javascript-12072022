const router = require('express').Router()

const { generateToken } = require('../../helpers/tokenHelpers')
const User = require('../../models/User')

router.route('/register')
  .post(async (req, res) => {
    // Récupération des paramètres de la requête
    const { email, password, firstName, lastName, phone } = req.body

    // On vérifie que l'email et le mot de passe sont bien présents
    if (!email || !password) return res.status(422).send('Missing parameters')

    // Création de l'utilisateur
    const user = new User({
      email, password, firstName, lastName, phone
    })

    try {
      // Enregistrement de l'utilisateur
      let _user = await user.save()
      // Récupération de la donnée insérée au format Object Javascript
      _user = _user.toObject()
      // Suppression du mot de passe dans l'object (sécurité)
      delete _user.password

      // On prépare les données du token
      const payload = {
        id: _user._id
      }

      // Génération du token
      const token = await generateToken(payload)

      // On renvoit le token
      if (token) {
        return res.send({ token, user: _user })
      }
    } catch (e) {
      // Vérification des erreurs & renvoi à l'appelant
      return res.status(422).send(e)
    }
  })

router.route('/login')
  .post(async (req, res) => {
    const { email, password } = req.body

    // On vérifie que l'email et le mot de passe sont bien présents
    if (!email || !password) return res.sendStatus(403)

    try {
      // On cherche l'utilisateur
      let user = await User.findOne({ email })
      if (!user) return res.sendStatus(403)

      // On vérifie le mot de passe
      const isMatch = await user.comparePassword(password)
      if (!isMatch) return res.sendStatus(403)

      // On prépare l'objet user
      user = user.toObject()
      delete user.password

      // On prépare les données du token
      const payload = {
        id: user._id
      }

      // Génération du token
      const token = await generateToken(payload)

      // On renvoit le token
      if (token) {
        return res.send({ token, user })
      }
    } catch (e) {
      console.error(e)
      return res.sendStatus(500)
    }
  })

module.exports = router
