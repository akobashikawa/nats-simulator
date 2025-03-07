import axios from "axios";

class ClientesService {
  constructor() {
    this.urlBackend = 'http://localhost:3010';
  }

  async getClientes() {
    const response = await axios.get(`${this.urlBackend}/clientes`);
    const clientes = response.data;
    return clientes;
  }

  async createCliente() {
    const response = await axios.post(`${this.urlBackend}/clientes`);
    const newCliente = response.data;
    return newCliente;
  }

  async deleteCliente(id) {
    const response = await axios.delete(`${this.urlBackend}/clientes/${id}`);
    const result = response.data;
    return result;
  }
}

export default ClientesService;