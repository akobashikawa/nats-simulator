const Cliente = require('./cliente');
const logger = require('./logger');

class ClientesRepository {
  constructor() {
    this.clientes = [];
  }

  getAll() {
    return this.clientes;
  }

  create() {
    const nuevoCliente = Cliente.create();
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  delete(id) {
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
  }
}

module.exports = ClientesRepository;