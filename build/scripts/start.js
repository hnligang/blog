const logger = require('../lib/logger')

logger.info('Starting server...')
require('../../server/main').listen(4001, () => {
  logger.success('Server is running at http://localhost:4001')
})
