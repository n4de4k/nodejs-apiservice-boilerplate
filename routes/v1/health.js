const HealthController = require('../../controllers/health')

module.exports = (express) =>
  new express.Router().get('/', HealthController.getHealth)
