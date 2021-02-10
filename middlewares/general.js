const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')

exports.handleCors = (router) => {
  router.options('*', cors())
  router.use(cors({ credentials: true, origin: true }))
}

exports.handleCompression = (router) => {
  router.use(compression())
}

exports.handleHelmet = (router) => {
  router.use(helmet())
}

exports.handleParseRequest = (router) => {
  router.use(bodyParser.json())
  router.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
}

exports.handleLogRequest = (router) => {
  router.use(morgan())
}
