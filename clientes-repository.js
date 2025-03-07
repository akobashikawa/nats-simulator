const Cliente = require('./cliente');
const logger = require('./logger');

class ClientesRepository {
  constructor() {
    this.clientes = [];
  }

  async getAll() {
    logger.info('memory getAll method called');
    return this.clientes;
  }

  async create() {
    const nuevoCliente = Cliente.create();
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  async delete(id) {
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
  }
}

module.exports = ClientesRepository;