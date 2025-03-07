const Cliente = require('./cliente');
const RepositoryInterface = require('./repository-interface');
const logger = require('./logger');

class SequelizeRepository extends RepositoryInterface {
  async getAll() {
    try {
      return await Cliente.findAll();
    } catch (err) {
      logger.error('Error trayendo clientes', err);
      throw err;
    }
  }

  async create(data) {
    try {
      const nuevoCliente = Cliente.build(data);
      await nuevoCliente.save();
      return nuevoCliente;
    } catch (err) {
      logger.error('Error creando cliente', err);
      throw err;
    }
  }

  async delete(id) {
    try {
      await Cliente.destroy({ where: { id } });
    } catch (err) {
      logger.error('Error eliminado cliente', err);
      throw err;
    }
  }
}

module.exports = SequelizeRepository;