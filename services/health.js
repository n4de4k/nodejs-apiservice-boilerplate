const getSystemHealth = () => {
  throw new Error('Something ??')
  const health = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  }

  return health
}

module.exports = {
  getSystemHealth,
}
