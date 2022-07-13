const mongoose = require('mongoose')
const { Schema } = mongoose

const bcrypt = require('bcryptjs')

const UserSchema = Schema({
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phone: {
    type: String
  }
}, { timestamps: true })

// Listener d'évènements sur l'enregistrement d'un utilisateur
UserSchema.pre('save', function (next) {
  // On récupère le user que l'on veut sauvegarder grâce au contexte "this"
  const user = this

  // Test si le mot de passe est modifié ou bien si c'est une création d'utilisateur
  if (user.isModified('password') || user.isNew) {
    // Génération du "sel" (la phrase de cryptage) pour crypter le mot de passe
    bcrypt.genSalt(10, (error, salt) => {
      if (error) throw new Error(error)

      // Cryptage du mot de passe
      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) throw new Error(error)
        // On remplace le mot de passe en clair par celui hashé
        user.password = hash

        // On exécute la suite
        return next()
      })
    })
  }
})

UserSchema.methods.comparePassword = async function (password) {
  // Récupération du user sur lequel on fait la comparaison
  const user = this
  // Comparaison du mot de passe
  const isMatch = await bcrypt.compare(password, user.password)
  return isMatch
}

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
