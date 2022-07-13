require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const multer = require('multer')
const mongoose = require('mongoose')

const logger = require('./middlewares/logger')
const withAuth = require('./middlewares/auth')

// Préparer stockage des fichiers uploadés
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`)
  }
})
const upload = multer({ storage })

// Initialisation de la connection à MongoDB
const mdbString =
`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`

mongoose.connect(mdbString, null, (error) => {
  if (error) throw new Error(error)
})

const db = mongoose.connection

db.once('open', () => {
  console.info('Connecté à la base MongoDB !')
})

// Initialisation de l'app
const app = express()
const router = express.Router()

// Middleware pour la gestion CORS
app.use(cors())
// Middleware regroupant plusieurs middlewares de sécurité
app.use(helmet())

// Comprendre l'utilisation des paramètres d'URL
app.use(express.urlencoded({ extended: true }))
// Interpréter le JSON
app.use(express.json())

// Mise en place d'un dossier "public"
app.use(express.static('public'))

// Sert a donner l'accès aux téléchargements dans le dossier uploads
app.use('/uploads', express.static('uploads'))

// Middleware de log des requếtes
app.use(logger)

// Route "/"
app.get('/', (req, res) => {
  res.send('Hello world')
})

// Activation du routeur Express
app.use(router)

/**
 * Routes
 */
app.use('/auth', require('./routes/auth'))
app.use('/protected', withAuth, require('./routes/protected'))

app.listen(process.env.PORT || 4000, () => {
  console.log('Server running on http://localhost:4000 !')
})
