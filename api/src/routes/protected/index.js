const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    return res.send('Je suis une route protégée !')
  })

module.exports = router
