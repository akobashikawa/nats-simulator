const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./logger'); // Importa el logger configurado
const config = require('./config'); // Importa la configuración

const name = 'clientes server';
const port = process.env.CLIENTES_PORT || 3010;

let repository;
if (config.repository === 'memory') {
  repository = new (require('./clientes-repository'))(); // Usa ClientesRepository en memoria
} else if (config.repository === 'mongo') {
  repository = new (require('./mongo-repository'))(); // Usa MongoRepository
} else if (config.repository === 'sequelize') {
  repository = new (require('./sequelize-repository'))(); // Usa SequelizeRepository
}

const ClientesService = require('./clientes-service');
const clientesService = new ClientesService(repository);

// Middleware para habilitar CORS
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
        const result = await clientesService.createCliente();
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
  logger.info(`repositorio: ${config.repository}`);
});
