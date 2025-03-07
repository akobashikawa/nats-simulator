import axios from "axios";

class ClientesService {
  constructor() {
    this.urlBackend = 'http://localhost:3010';
    this.clientes = [];
  }

  async getClientes() {
    const response = await axios.get(`${this.urlBackend}/clientes`);
    this.clientes = response.data;
    return this.clientes;
  }

  async createCliente() {
    const response = await axios.post(`${this.urlBackend}/clientes`);
    const newCliente = response.data;
    this.clientes.push(newCliente);
    return newCliente;
  }
}

export default ClientesService;