const axios = require('axios');
const ClientesRepository = require('./clientes-repository');
const logger = require('./logger');

class ClientesService {
  constructor() {
    this.clientesRepository = new ClientesRepository();
  }

  hola() {
    return 'hola';
  }

  async getClientes() {
    return this.clientesRepository.getAll();
  }

  async createCliente() {
    return this.clientesRepository.create();
  }

  async deleteCliente(id) {
    this.clientesRepository.delete(id);
  }
}

module.exports = ClientesService;