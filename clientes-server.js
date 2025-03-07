const express = require('express');
const cors = require('cors');
const app = express();

const name = 'clientes server';
const port = 3010;
const ClientesService = require('./clientes-service');
const clientesService = new ClientesService();

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

app.get('/hola', (req, res) => {
    const result = clientesService.hola();
    res.send(result);
});

app.get('/clientes', async (req, res) => {
    const result = await clientesService.getClientes();
    res.send(result);
});

app.post('/clientes', async (req, res) => {
    const result = await clientesService.createCliente();
    res.send(result);
});

app.delete('/clientes/:id', async (req, res) => {
  console.log('delete cliente');
    const { id } = req.params;
    await clientesService.deleteCliente(id);
    res.send({ message: 'Cliente eliminado' });
});

// Middleware para manejar rutas no existentes
app.use((req, res, next) => {
  res.status(404).send('URL no encontrada');
});

app.listen(port, () => {
  console.log(`${name} app funcionando en http://localhost:${port}`);
});
