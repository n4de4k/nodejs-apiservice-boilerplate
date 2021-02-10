const { NODE_ENV = 'dev' } = process.env
const { log } = console

const errorHandler = (err, req, res, next) => {
  if (NODE_ENV !== 'production') {
    log('[ERROR]', err)
  }

  let resCode = 200

  if (err.message.includes('jwt')) {
    if (err.message === 'jwt expired') {
      resCode = 400
    } else {
      resCode = 401
    }
  }
  const errBody = {
    message: err.isJoi ? err.details[0].message : err.message,
  }

  if (NODE_ENV != 'production') {
    errBody.error = err
  }

  return res.status(resCode).json(errBody)
}

const error404Handler = (_, res) => {
  res.status(404).json({
    message: 'Not found',
  })
}

exports.handleGeneralError = (router) => {
  router.use(errorHandler)
}

exports.handle404Error = (router) => {
  router.use(error404Handler)
}
