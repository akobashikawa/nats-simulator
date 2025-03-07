const Cliente = require('./cliente');
const RepositoryInterface = require('./repository-interface');
const logger = require('./logger');

class MongoRepository extends RepositoryInterface {
  async getAll() {
    try {
      return await Cliente.find();
    } catch (err) {
      logger.error('Error trayendo clientes', err);
      throw err;
    }
  }

  async create(data) {
    try {
      const nuevoCliente = new Cliente(data);
      await nuevoCliente.save();
      return nuevoCliente;
    } catch (err) {
      logger.error('Error creando cliente', err);
      throw err;
    }
  }

  async delete(id) {
    try {
      await Cliente.deleteOne({ id });
    } catch (err) {
      logger.error('Error eliminando cliente', err);
      throw err;
    }
  }
}

module.exports = MongoRepository;