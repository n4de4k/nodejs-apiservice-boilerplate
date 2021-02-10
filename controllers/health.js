const { getSystemHealth } = require('../services/health')

exports.getHealth = (req, res, next) => {
  try {
    return res.json(getSystemHealth())
  } catch (err) {
    return next(err)
  }
}
