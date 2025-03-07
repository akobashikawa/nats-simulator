require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  log: process.env.LOG_LEVEL || 'info',
};

module.exports = config;