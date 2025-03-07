const logger = require('./logger');

class ClientesService {
  constructor(repository) {
    this.repository = repository;
  }

  hola() {
    logger.info('hola method called');
    return 'hola';
  }

  async getClientes() {
    logger.info('getClientes method called');
    return this.repository.getAll();
  }

  async createCliente() {
    logger.info('createCliente method called');
    return this.repository.create();
  }

  async deleteCliente(id) {
    logger.info(`deleteCliente method called with id: ${id}`);
    return this.repository.delete(id);
  }
}

module.exports = ClientesService;