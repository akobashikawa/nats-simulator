const pino = require('pino');
const config = require('./config.js');

const logger = pino({
    transport: {
      target: 'pino-pretty'
    },
  });

module.exports = logger;