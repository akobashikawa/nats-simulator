const express = require('express');
const app = express();

const config = require('./config'); // Importa la configuración
const logger = require('./logger'); // Importa el logger configurado
const ClientesRepositoryFactory = require('./clientes-repository-factory'); // Importa la fábrica de repositorios

const name = 'clientes server';
const port = process.env.CLIENTES_PORT || 3010;

const repository = ClientesRepositoryFactory.createRepository(); // Usa la fábrica para crear el repositorio

const ClientesService = require('./clientes-service');
const clientesService = new ClientesService(repository);

// Middleware para habilitar CORS
const cors = require('cors');
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

app.get('/hola', (req, res) => {
  const result = clientesService.hola();
  res.send(result);
});

app.get('/clientes', async (req, res) => {
  try {
    const result = await clientesService.getClientes();
    res.send(result);
  } catch (err) {
    logger.error('Error trayendo clientes', err);
    res.status(500).send('Error trayendo clientes');
  }
});

app.post('/clientes', async (req, res) => {
  try {
    const data = req.body;
    const result = await clientesService.createCliente(data);
    res.send(result);
  } catch (err) {
    logger.error('Error creando client', err);
    res.status(500).send('Error creando client');
  }
});

app.delete('/clientes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await clientesService.deleteCliente(id);
    res.send({ message: 'Cliente eliminado' });
  } catch (err) {
    logger.error('Error eliminado cliente', err);
    res.status(500).send('Error eliminado cliente');
  }
});

// Middleware para manejar rutas no existentes
app.use((req, res, next) => {
  res.status(404).send('URL no encontrada');
});

app.listen(port, () => {
  logger.info(`${name} app funcionando en http://localhost:${port}`);
  logger.info(`env: ${config.env}`);
  logger.info(`repository: ${config.repository}`);
});
