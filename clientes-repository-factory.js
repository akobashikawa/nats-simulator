const config = require('./config');
const logger = require('./logger');

class ClientesRepositoryFactory {
  static createRepository() {
    const repositoryType = config.repository;

    try {
      return new (require(`./clientes-${repositoryType}-repository`))();
    } catch (err) {
      logger.error(`Error loading repository: ${err.message}`);
      throw err;
    }
  }
}

module.exports = ClientesRepositoryFactory;