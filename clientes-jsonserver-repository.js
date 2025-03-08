const axios = require('axios');
const RepositoryInterface = require('./repository-interface');
const logger = require('./logger');

class JsonServerRepository extends RepositoryInterface {
  constructor() {
    super();
    this.baseUrl = `${process.env.JSONSERVER_URL}/clientes`;
  }

  async getAll() {
    try {
      const response = await axios.get(this.baseUrl);
      return response.data;
    } catch (err) {
      logger.error('Error trayendo clientes', err);
      throw err;
    }
  }

  async create(data) {
    try {
      const response = await axios.post(this.baseUrl, data);
      return response.data;
    } catch (err) {
      logger.error('Error creando clientes', err);
      throw err;
    }
  }

  async delete(id) {
    try {
      await axios.delete(`${this.baseUrl}/${id}`);
    } catch (err) {
      logger.error('Error eliminando clientes', err);
      throw err;
    }
  }
}

module.exports = JsonServerRepository;