require('dotenv').config()

global.__basedir = __dirname
const express = require('express')
const { log } = console
const { NODE_PORT = 3000 } = process.env
const {
  baseMiddleware,
  applyMiddleware,
  errorMiddleware,
} = require('./middlewares')

const app = express()
applyMiddleware(baseMiddleware, app)

// Router handling
app.get('/', (_, res) => {
  return res.json({ message: 'OMS App Service is on' })
})

// Private route section
app.use(require('./routes'))

applyMiddleware(errorMiddleware, app)

app.listen(NODE_PORT, () => {
  log(`App Listening on port ${NODE_PORT}`)
})
