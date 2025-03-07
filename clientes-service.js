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

  async createCliente(data) {
    logger.info('createCliente method called');
    const id = data.id || Math.random().toString(36).substr(2, 3); // Genera un ID al azar
    const nombre = data.nombre || `Cliente ${id}`;
    logger.info(`id: ${id}, nombre: ${nombre}`);
    return this.repository.create({ id, nombre });
  }

  async deleteCliente(id) {
    logger.info(`deleteCliente method called with id: ${id}`);
    return this.repository.delete(id);
  }
}

module.exports = ClientesService;