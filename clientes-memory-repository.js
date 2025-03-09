const Cliente = require('./cliente');
const RepositoryInterface = require('./repository-interface');
const logger = require('./logger');

class ClientesMemoryRepository extends RepositoryInterface {
  constructor() {
    super();
    this.clientes = [];
  }

  async getAll() {
    logger.info('memory getAll llamado');
    return this.clientes;
  }

  async create(data) {
    const nuevoCliente = Cliente.create(data);
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  async delete(id) {
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
  }
}

module.exports = ClientesMemoryRepository;