const axios = require('axios');
const Cliente = require('./cliente');

class ClienteService {
  constructor(id, nombre) {
    this.clientes = [];
  }

  hola() {
    return 'hola';
  }

  async getClientes() {
    return this.clientes;
  }

  async createCliente() {
    const nuevoCliente = Cliente.create();
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  async pide(message) {
    const url = `${cajeroUrlbase}/quiero`;
    try {
      const response = await axios.get(url, { params: { message } });
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ClienteService;