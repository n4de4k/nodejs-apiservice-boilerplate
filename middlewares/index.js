const { handle404Error, handleGeneralError } = require('./response')
const {
  handleCompression,
  handleCors,
  handleHelmet,
  handleParseRequest,
  handleLogRequest,
} = require('./general')

exports.baseMiddleware = [
  handleCompression,
  handleCors,
  handleHelmet,
  handleParseRequest,
  handleLogRequest,
]

exports.errorMiddleware = [handle404Error, handleGeneralError]

exports.applyMiddleware = (middlewares, router) => {
  for (const middleware of middlewares) {
    middleware(router)
  }
}
