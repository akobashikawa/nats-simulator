const pino = require('pino');
const config = require('./config.js');

const logger = pino();

module.exports = logger;